import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../common/firebaseConnection";
import {getToken} from "../common/jwt";
import {Request, Response} from "express";

export class Auth {
  async auth(req: Request, res: Response) {
    const {body} = req;
    const authToken = await signInWithEmailAndPassword(
      auth,
      "teste@gmail.com",
      "123123"
    ).then(user => {
      if (user?.user?.email) {
        const token = getToken(user?.user?.email);
        return token;
      }
    });
    return res.json(authToken);
  }
}
