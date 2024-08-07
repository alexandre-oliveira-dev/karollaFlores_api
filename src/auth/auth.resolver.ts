import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../common/firebaseConnection";
import {getToken, verifyToken} from "../common/jwt";
import {Request, Response} from "express";

export class Auth {
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
    const {token} = req?.params;
    const isValid = await verifyToken(token);

    return res.json(isValid);
  }
}
