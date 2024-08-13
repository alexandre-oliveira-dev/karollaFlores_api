import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export class KrlfPhotos {
  async create(data: Prisma.PhotosCreateManyInput[]) {
    return await prisma.photos.createMany({
      data,
    });
  }
}
