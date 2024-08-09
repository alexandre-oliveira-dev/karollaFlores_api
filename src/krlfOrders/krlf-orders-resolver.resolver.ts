import {Request, Response} from "express";
import {
  OrderFindMany,
  OrdersCreateInput,
  OrdersUpdateInput,
} from "./dto/agrs/args";
import {KrlfOrdersService} from "./krlf-orders-service.service";
import {generatePageInfo} from "../common/paginaton";

const service = new KrlfOrdersService();

export class KrlfOrdersResolver {
  async findMany(req: Request, res: Response) {
    const {query} = req;
    const args: OrderFindMany = query;
    const response = await service.findMany(args);
    const pageInfo = generatePageInfo(
      Number(args?.take),
      Number(args?.skip),
      response.length
    );
    return res.json({
      response,
      pageInfo,
    });
  }

  async findUnique(req: Request, res: Response) {
    const {params} = req;
    const orderId = params?.id;
    return res
      .status(200)
      .json(await service.findUnique({id: Number(orderId)}));
  }

  async create(req: Request, res: Response) {
    const body: OrdersCreateInput = req?.body;
    try {
      const data = await service.create(body);
      return res.status(200).json(data);
    } catch (err) {
      return res.json(err);
    }
  }

  async update(req: Request, res: Response) {
    const {id} = req?.params;
    try {
      const body: OrdersUpdateInput = req?.body;
      return res.status(200).json(await service.update(body, {id: Number(id)}));
    } catch (err) {
      return res.json(err);
    }
  }

  async delete(req: Request, res: Response) {
    const {id} = req?.params;
    return res.status(200).json(await service.delete({id: Number(id)}));
  }
}
