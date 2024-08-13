-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_prodId_fkey";

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
