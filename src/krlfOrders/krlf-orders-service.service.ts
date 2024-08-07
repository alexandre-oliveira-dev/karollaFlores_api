import {PrismaClient} from "@prisma/client";
import {
  OrderFindMany,
  OrdersCreateInput,
  OrdersUpdateInput,
} from "./dto/agrs/args";
import {OrdersModel} from "./dto/model/orders.model";

const prisma = new PrismaClient();

export class KrlfOrdersService {
  async findMany(args?: OrderFindMany) {
    return await prisma.orders.findMany(args);
  }

  async findUnique({id}: Pick<OrdersModel, "id">) {
    return await prisma.orders.findUnique({
      where: {
        id,
      },
    });
  }

  async create(body: OrdersCreateInput) {
    return await prisma.orders.create({
      data: body?.data,
    });
  }

  async update(body: OrdersUpdateInput, {id}: Pick<OrdersModel, "id">) {
    return await prisma.orders.update({
      where: {
        id,
      },
      data: body,
    });
  }

  async delete({id}: Pick<OrdersModel, "id">) {
    return await prisma.orders.delete({where: {id}});
  }
}
