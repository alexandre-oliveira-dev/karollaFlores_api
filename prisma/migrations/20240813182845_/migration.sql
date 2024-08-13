/*
  Warnings:

  - You are about to drop the column `imgUrl` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imgUrl";

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "prodId" INTEGER NOT NULL,
    "imgBase64" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
