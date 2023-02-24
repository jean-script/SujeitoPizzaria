import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub:String;

}

export function isAuthenticated(req:Request, res:Response, next:NextFunction){
    
    // receber token

    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // validar token

        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        // recupera o id do token e colocar dentro do request
        req.user_id = sub;
    
       return next();
        
    } catch (error) {
        return res.status(401).end();
    }
    

}