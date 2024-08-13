/*
  Warnings:

  - You are about to drop the column `qtd` on the `Orders` table. All the data in the column will be lost.
  - The `items` column on the `Orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ItemsType" AS ENUM ('id', 'qtd');

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "qtd",
DROP COLUMN "items",
ADD COLUMN     "items" JSONB[];

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "description" TEXT,
ALTER COLUMN "isNewsLister" DROP DEFAULT;
