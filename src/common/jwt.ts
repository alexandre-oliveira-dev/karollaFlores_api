import jwt from "jsonwebtoken";

const sercret = process.env.TOKEN_KEY as String;
let tokenGenerated = "";

const getToken = async (email: string) => {
  const token = jwt.sign({login: email}, `${sercret}`, {
    expiresIn: "1h",
  });
  tokenGenerated = token;
  return token;
};
const verifyToken = async (token: string) => {
  try {
    jwt.verify(token, `${sercret}`);
    return true;
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return false;
    }
  }
};

export {getToken, verifyToken};
