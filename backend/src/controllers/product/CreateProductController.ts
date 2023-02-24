import { Response, Request } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController {
    async handle(req: Request, res:Response){
        
        const { name, price, description, category_id } = req.body;

        const createProductController = new CreateProductService();

        if(!req.file){
            throw new Error("Error upload file");
        } else {

            const { originalname, filename: banner } = req.file;

            const product = await createProductController.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            
        
            return res.json(product);
        }

    }
}


export { CreateProductController };