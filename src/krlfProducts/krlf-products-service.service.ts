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
    return await prisma.products.findMany({
      where: args?.where ? args.where : undefined,
      skip: args?.skip ? args.skip : undefined,
      take: args?.take ? args.take : undefined,
      select: {
        id: true,
        categoryId: true,
        description: true,
        isNewsLister: true,
        price: true,
        title: true,
        Photos: true,
        qtdStock: true,
        type: true,
      },
    });
  }

  async findUnique({id}: Pick<ProductsModel, "id">) {
    return await prisma.products.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        categoryId: true,
        description: true,
        isNewsLister: true,
        price: true,
        title: true,
        Photos: true,
        qtdStock: true,
        type: true,
      },
    });
  }

  async create(body: ProductsCreateInput) {
    const {
      price,
      qtdStock,
      title,
      type,
      isNewsLister,
      categoryId,
      description,
    } = body;
    return await prisma.products.create({
      data: {
        price,
        title,
        type,
        isNewsLister: Boolean(isNewsLister),
        description,
        qtdStock: Number(qtdStock),
        categoryId: Number(categoryId),
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
      select: {
        id: true,
      },
    });
  }

  async delete({id}: Pick<ProductsModel, "id">) {
    return await prisma.products.delete({where: {id}, select: {id: true}});
  }
}
