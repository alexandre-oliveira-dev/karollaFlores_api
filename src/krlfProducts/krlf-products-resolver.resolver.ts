import { Request, Response} from "express";
import {
  ProductsCreateInput,
  ProductsFindManyArgs,
  ProductsUpdateInput,
} from "./dto/agrs/args";
import {KrlfProductsService} from "./krlf-products-service.service";
import {generatePageInfo} from "../common/paginaton";

const service = new KrlfProductsService();

export class KrlfProductsResolver {
  async findMany(req: Request, res: Response) {
    const {query} = req;
    const args: ProductsFindManyArgs = query;
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
    const productId = params?.id;
    return res.status(200).json(await service.findUnique({id: productId}));
  }

  async create(req: Request, res: Response) {
    const body: ProductsCreateInput = req?.body;
    const data = await service.create(body);
    return res.status(200).json(data);
  }

  async update(req: Request, res: Response) {
    const {id} = req?.params;
    const body: ProductsUpdateInput = req?.body;
    return res.status(200).json(await service.update(body, {id}));
  }

  async delete(req: Request, res: Response) {
    const {id} = req?.params;
    return res.status(200).json(await service.delete({id}));
  }
}
