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

  async create(body: ProductsCreateInput) {
    return await prisma.products.createMany({
      data: body?.data,
    });
  }

  async update(body: ProductsUpdateInput, {id}: Pick<ProductsModel, "id">) {
    return await prisma.products.update({
      where: {
        id,
      },
      data: body,
    });
  }

  async delete({id}: Pick<ProductsModel, "id">) {
    return await prisma.products.delete({where: {id}});
  }
}
