import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../common/firebaseConnection";
import {getToken, verifyToken} from "../common/jwt";
import {Request, Response} from "express";

export class Auth {
  async createUser(req: Request, res: Response) {
    const {email, password} = req.body;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return res.status(200).json({
        userId: response?.user?.uid,
      });
    } catch (err) {
      return res.status(501).json({message: err});
    }
  }

  async auth(req: Request, res: Response) {
    const {email, password} = req.body;
    const authToken = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then(user => {
      if (user?.user?.email) {
        const token = getToken(user?.user?.email);
        return token;
      }
    });
    return res.json({token: authToken, userMail: email});
  }

  async verifyToken(req: Request, res: Response) {
    const {token} = req?.headers;
    const isValid = await verifyToken(token as string);

    return res.json(isValid);
  }
}
