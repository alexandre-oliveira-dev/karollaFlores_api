import {PrismaClient} from "@prisma/client";
import {
  CategoryCreateInput,
  CategoryFindMany,
  CategoryUpdateInput,
} from "./dto/agrs/args";
import {CategoryModel} from "./dto/model/orders.model";

const prisma = new PrismaClient();

export class KrlfCategoryService {
  async findMany(args?: CategoryFindMany) {
    return await prisma.categorys.findMany(args);
  }

  async findUnique({id}: Pick<CategoryModel, "id">) {
    return await prisma.categorys.findUnique({
      where: {
        id,
      },
    });
  }

  async create(body: CategoryCreateInput) {
    return await prisma.categorys.create({
      data: body,
    });
  }

  async update(body: CategoryUpdateInput, {id}: Pick<CategoryModel, "id">) {
    return await prisma.categorys.update({
      where: {
        id,
      },
      data: body,
    });
  }

  async delete({id}: Pick<CategoryModel, "id">) {
    return await prisma.categorys.delete({where: {id}});
  }
}
