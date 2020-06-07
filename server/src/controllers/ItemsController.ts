import { Request, Response } from 'express';
import knex from '../database/connection';

//Index   = List All
//Show    = List One
//Create  = Create
//Update  = Update
//Delete  = Delete

class ItemsController {
	async index(request: Request, response: Response) {
		const items = await knex('items').select('*');

		const serializedItems = items.map((item) => {
			return {
				id: item.id,
				title: item.title,
				image_url: `http://192.168.0.103:3333/uploads/${item.image}`,
			};
		});

		return response.json(serializedItems);
	}
}

export default ItemsController;
