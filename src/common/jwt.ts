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
const verifyToken = async () => {
  const token = jwt.verify(tokenGenerated, `${sercret}`);
  return token;
};

export {getToken, verifyToken};
