/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Wine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wine_slug_key" ON "Wine"("slug");
