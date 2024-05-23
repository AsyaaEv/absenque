"use client";
import { Button } from "@/components/ui/button";
import { FileUpIcon } from "lucide-react";
import * as XLSX from "xlsx";
import { GetAbsenSiswa } from "../constructiuon/absen/getAbsenSiswa";

export default function Admin() {
    const { isFetching, data } = GetAbsenSiswa();
    const handleExport = async() => {
        const dataToExport = data.map((pro: any) => ({
            nama: pro.nama,
            kelas: pro.kelas,
            jurusan: pro.jurusan,
          }),);
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'wisuda2024');
        XLSX.writeFile(workbook, `wisuda.xlsx`)
    }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        src="/bg.jpg"
        alt="bg"
        className="w-full h-screen object-cover brightness-[0.3] absolute -z-50"
      />
      <div className="w-full h-screen flex  text-center p-8 flex-col">
        <h1 className="text-white text-4xl font-bold italic">
          Dashboard Admin
        </h1>
        <h1 className="text-white/70 text-md">
          Klik button di bawah ini untuk mengexport data ke excel
        </h1>
        <div className="w-full h-auto flex justify-center items-center mt-8">
          <Button onClick={handleExport} className="flex gap-2 items-center justify-center p-4 border-2 border-dashed">
            Eksport
            <FileUpIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
