import {Prisma} from "@prisma/client";

export type OrderFindMany = Prisma.OrdersFindManyArgs;

export type OrdersFindUniqueArgs = Prisma.OrdersFindUniqueArgs;

export type OrdersCreateInput = {
  data: Prisma.OrdersCreateInput;
};

export type OrdersUpdateInput = Prisma.OrdersUpdateInput;

export type OrdersUpdateArgs = Prisma.OrdersUpdateArgs;
