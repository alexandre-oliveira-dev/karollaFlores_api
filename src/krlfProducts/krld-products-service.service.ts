import {PrismaClient} from "@prisma/client";
import {
  ProductsCreateInput,
  ProductsFindManyArgs,
  ProductsFindUniqueArgs,
  ProductsUpdateArgs,
  ProductsUpdateInput,
} from "./dto/agrs/args";

const prisma = new PrismaClient();

export class KrlfProductsService {
  async findMany(args?: ProductsFindManyArgs) {
    return await prisma.products.findMany(args);
  }

  async findUnique(args: ProductsFindUniqueArgs) {
    return await prisma.products.findUnique(args);
  }

  async create(body: ProductsCreateInput[]) {
    return await prisma.products.createMany({
      data: body,
    });
  }

  async update(body: ProductsUpdateInput, agrs: ProductsUpdateArgs) {
    return await prisma.products.update({
      where: agrs.where,
      data: body,
    });
  }
}
