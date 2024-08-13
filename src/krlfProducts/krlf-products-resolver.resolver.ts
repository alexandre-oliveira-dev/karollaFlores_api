import {Request, Response} from "express";
import {
  ProductsCreateInput,
  ProductsFindManyArgs,
  ProductsUpdateInput,
} from "./dto/agrs/args";
import {KrlfProductsService} from "./krlf-products-service.service";
import {generatePageInfo} from "../common/paginaton";
import {Prisma, PrismaClient} from "@prisma/client";
import {KrlfPhotos} from "../krlfPhotos/krlfPhotos.service";

const service = new KrlfProductsService();

const photosService = new KrlfPhotos();

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
    // @ts-ignore
    const imgToBase64: string[] = req.files?.map((value: Express.Multer.File) =>
      value.buffer.toString("base64")
    );

    try {
      if (imgToBase64.length > 0 && imgToBase64.length < 4) {
        const data = await service.create(body);
        const bodyPhotos = imgToBase64.map(item => {
          return {
            prodId: data?.id,
            imgBase64: item,
          };
        });

        await photosService.create(bodyPhotos);
        return res.status(200).json(data);
      }
      return res.status(201).json({message: "Selecione no maximo 3 imagens."});
    } catch (err) {
      return res.status(501).json({error: err});
    }
  }

  async update(req: Request, res: Response) {
    const {id} = req?.params;
    try {
      const body: ProductsUpdateInput = req?.body;
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
