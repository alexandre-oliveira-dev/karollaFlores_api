import jwt from "jsonwebtoken";

const secret = process.env.TOKEN_KEY as String;

const getToken = async (email: string) => {
  const token = jwt.sign({login: email}, `${secret}`, {
    expiresIn: "1h",
  });
  return token;
};
const verifyToken = async (token: string) => {
  try {
    jwt.verify(token, `${secret}`);
    return true;
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return false;
    }
  }
};

export {getToken, verifyToken};
