import jwt from 'jsonwebtoken';

const createToken = (data: any, secret: string) => {
    return jwt.sign(data, secret, { expiresIn: 60*60*30 });
}

const verifyToken =  (token: string, secret: string) => {
    return jwt.verify(token, secret);
}

export const JWT = {
    createToken,
    verifyToken,
}