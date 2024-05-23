import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <img
          src="/bg.jpg"
          alt="bg"
          className="w-full h-screen object-cover brightness-[0.3] absolute -z-50"
        />
        <div className="w-full h-screen flex  text-center p-8 flex-col">
          <h1 className="text-white text-4xl font-bold italic">
            Absensi Peserta Wisuda Skansaba 2024
          </h1>
          <h1 className="text-white/70 text-md">
            Absen dulu di sini dan jangan lupa masukin data yang valid ya. Biar
            acara kita makin keren dan lancar. Stay cool and congrats, guys!😉
          </h1>
          <h1 className="text-white/70 text-sm mt-2">
            By: <Link href='https://instagram.com/syaa.ev' className="underline">@syaa.ev</Link>
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center items-center pb-[10rem]">
          <Button asChild className="flex gap-2 items-center justify-center p-4 border-2 border-dashed">
            <Link href='/absen'>Absen Kuy! <Send size={14}></Send></Link>
          </Button>
        </div>
      </div>
    </>
  );
}
