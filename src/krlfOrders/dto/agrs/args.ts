import {Prisma} from "@prisma/client";

export type OrderFindMany = Prisma.OrdersFindManyArgs;

export type OrdersFindUniqueArgs = Prisma.OrdersFindUniqueArgs;

/* class Create implements Prisma.OrdersCreateInput{
  items?: {
    id: number,
    qtd:number
  };
} */

export type OrdersCreateInput = Prisma.OrdersUncheckedCreateInput;

export type OrdersUpdateInput = Prisma.OrdersUpdateInput;

export type OrdersUpdateArgs = Prisma.OrdersUpdateArgs;
