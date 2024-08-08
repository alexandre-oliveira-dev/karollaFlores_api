/*
  Warnings:

  - You are about to drop the column `productId` on the `Categorys` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Categorys" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "isNewsLister" BOOLEAN NOT NULL DEFAULT false;
