import {Request, Response} from "express";
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
    return res
      .status(200)
      .json(await service.findUnique({id: Number(productId)}));
  }

  async create(req: Request, res: Response) {
    const body: ProductsCreateInput = req?.body;
    let imgToBase64 = req.file?.buffer.toString("base64");

    try {
      if (imgToBase64) {
        const data = await service.create(body, imgToBase64);
        return res.status(200).json(data);
      }
    } catch (err) {
      return res.status(501).json({error: err});
    }
  }

  async update(req: Request, res: Response) {
    const {id} = req?.params;
    try {
      const body: ProductsUpdateInput = req?.body;
      console.log("🚀 ~ KrlfProductsResolver ~ update ~ body:", body);
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
