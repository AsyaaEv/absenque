/*
  Warnings:

  - A unique constraint covering the columns `[nama]` on the table `Siswa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nama_key" ON "Siswa"("nama");
