import { Response, Request } from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';


class AuthUserController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authUserServer = new AuthUserService();

        const auth = await authUserServer.execute({
            email,
            password
        })

        return res.json(auth);

    }
}

export { AuthUserController } 