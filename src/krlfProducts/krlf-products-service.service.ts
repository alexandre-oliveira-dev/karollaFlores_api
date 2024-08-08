import {PrismaClient} from "@prisma/client";
import {
  ProductsCreateInput,
  ProductsFindManyArgs,
  ProductsUpdateInput,
} from "./dto/agrs/args";
import {ProductsModel} from "./dto/model/products.model";

const prisma = new PrismaClient();

export class KrlfProductsService {
  async findMany(args?: ProductsFindManyArgs) {
    return await prisma.products.findMany(args);
  }

  async findUnique({id}: Pick<ProductsModel, "id">) {
    return await prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  async create(body: ProductsCreateInput, imgBase64: string) {
    const {price, qtdStock, title, type, isNewsLister, categoryId} = body;
    return await prisma.products.create({
      data: {
        price,
        title,
        type,
        isNewsLister,
        qtdStock: Number(qtdStock),
        imgUrl: imgBase64,
        categoryId,
      },
      select: {
        id: true,
      },
    });
  }

  async update(body: ProductsUpdateInput, {id}: Pick<ProductsModel, "id">) {
    return await prisma.products.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }

  async delete({id}: Pick<ProductsModel, "id">) {
    return await prisma.products.delete({where: {id}, select: {id: true}});
  }
}
