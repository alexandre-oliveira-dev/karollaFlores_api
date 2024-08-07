/*
  Warnings:

  - Added the required column `status` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('deliveryed', 'delivery', 'waitingPayment');

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "status" "OrderStatus" NOT NULL;
