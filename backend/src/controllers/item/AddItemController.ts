import { Request, Response } from "express";
import { AddItemsService } from "../../services/item/AddItemsService";

class AddItemController {
    async handle(req:Request, res:Response){

        const { order_id, product_id, amount } = req.body;

        const addItem = new AddItemsService();

        const item =  await addItem.execute({
            order_id,
            product_id,
            amount
        });

        return res.json(item)

    }
}

export { AddItemController }