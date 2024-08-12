/*
  Warnings:

  - The `items` column on the `Orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `qtd` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "qtd" INTEGER NOT NULL,
DROP COLUMN "items",
ADD COLUMN     "items" INTEGER[];
