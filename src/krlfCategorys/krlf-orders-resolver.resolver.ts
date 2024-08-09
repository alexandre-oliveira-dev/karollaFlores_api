import {Request, Response} from "express";
import {
  CategoryFindMany,
  CategoryUpdateInput,
  CategoryCreateInput,
} from "./dto/agrs/args";
import {KrlfCategoryService} from "./krlf-orders-service.service";
import {generatePageInfo} from "../common/paginaton";

const service = new KrlfCategoryService();

export class KrlfCategoryResolver {
  async findMany(req: Request, res: Response) {
    const {query} = req;
    const args: CategoryFindMany = query;
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
    return res
      .status(200)
      .json(await service.findUnique({id: Number(productId)}));
  }

  async create(req: Request, res: Response) {
    const body: CategoryCreateInput = req?.body;
    try {
      const data = await service.create(body);
      return res.status(200).json(data);
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  async update(req: Request, res: Response) {
    const {id} = req?.params;
    try {
      const body: CategoryUpdateInput = req?.body;
      return res.status(200).json(await service.update(body, {id: Number(id)}));
    } catch (err) {
      return res.status(501).json(err);
    }
  }

  async delete(req: Request, res: Response) {
    const {id} = req?.params;
    return res.status(200).json(await service.delete({id: Number(id)}));
  }
}
