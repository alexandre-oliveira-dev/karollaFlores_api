import {Request, Response} from "express";
import {
  ProductsCreateInput,
  ProductsFindManyArgs,
  ProductsFindUniqueArgs,
  ProductsUpdateArgs,
  ProductsUpdateInput,
} from "./dto/agrs/args";
import {KrlfProductsService} from "./krld-products-service.service";
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
  async findUnique(args: ProductsFindUniqueArgs) {
    return await service.findUnique(args);
  }
  async create(body: ProductsCreateInput[]) {
    return await service.create(body);
  }
  async update(args: ProductsUpdateArgs, body: ProductsUpdateInput) {
    return await service.update(body, args);
  }
}
