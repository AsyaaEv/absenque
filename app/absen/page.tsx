"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormik } from "formik";
import { CircleCheckBigIcon, Loader2, Send, XCircle } from "lucide-react";
import { newAbsenSiswa } from "../constructiuon/absen/newAbsenSiswa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface absenTypeValue {
  nama: string;
  kelas: string;
  jurusan: string;
}

const validate = (values: absenTypeValue) => {
  const errors: { nama?: string; kelas?: string; jurusan?: string } = {};
  if (!values.nama) {
    errors.nama = "Nama tidak boleh kosong";
  }
  if (!values.kelas) {
    errors.kelas = "Kelas tidak boleh kosong";
  }
  if (!values.jurusan) {
    errors.jurusan = "Jurusan tidak boleh kosong";
  }

  return errors;
};
export default function Absen() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const { mutate: AbsenSiswa, isPending: newAbsenSiswaIsLoading } =
    newAbsenSiswa({
      onSuccess: () => {
        setOpen(true);
      },
      onError: () => {
        setError(true);
      },
    });
  const formik = useFormik<absenTypeValue>({
    initialValues: {
      nama: "",
      kelas: "",
      jurusan: "",
    },
    validate,
    onSubmit: (values) => {
      const { nama, kelas, jurusan } = formik.values;

      try {
        AbsenSiswa({ nama, kelas, jurusan });
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        src="/bg.jpg"
        alt="bg"
        className="w-full h-screen object-cover brightness-[0.3] absolute -z-50"
      />
      <Card className="w-[350px] bg-black text-white border-dashed">
        <CardHeader>
          <CardTitle>Absensi Wisuda</CardTitle>
          <CardDescription>Masukin data dengan benar ya!😉</CardDescription>
        </CardHeader>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nama</Label>
                <Input
                  className={`${
                    formik.errors.nama
                      ? "border-red-500 border-2"
                      : "text-black"
                  } ${error ? "border-red-500 border-2" : "text-black"}`}
                  id="name"
                  placeholder="Nama kamu nih"
                  name="nama"
                  onChange={formik.handleChange}
                  value={formik.values.nama}
                />
                {error ? (
                  <div className="text-red-500 text-sm">
                    Nama tersebut sudah absen
                  </div>
                ) : null}
                {formik.errors.nama ? (
                  <XCircle
                    size={20}
                    className="absolute ml-[17rem] translate-y-6 text-red-500"
                  />
                ) : null}
                {error ? (
                  <XCircle
                    size={20}
                    className="absolute ml-[17rem] translate-y-6 text-red-500"
                  />
                ) : null}
                {formik.errors.nama ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.nama}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Kelas</Label>
                <Input
                  className={`${
                    formik.errors.kelas
                      ? "border-red-500 border-2"
                      : "text-black"
                  }`}
                  id="name"
                  placeholder="Kamu kelas apa?"
                  name="kelas"
                  onChange={formik.handleChange}
                  value={formik.values.kelas}
                />
                {formik.errors.kelas ? (
                  <XCircle
                    size={20}
                    className="absolute ml-[17rem] translate-y-6 text-red-500"
                  />
                ) : null}
                {formik.errors.kelas ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.kelas}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Jurusan</Label>
                <Select
                  name="jurusan"
                  onValueChange={(values) =>
                    formik.setFieldValue("jurusan", values)
                  }
                >
                  <SelectTrigger
                    className={`${
                      formik.errors.jurusan
                        ? "border-red-500 border-2 text-black"
                        : "text-black"
                    }`}
                  >
                    <SelectValue placeholder="Pilih jurusan kamu ya!" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="rpl">RPL</SelectItem>
                    <SelectItem value="bdp">BDP</SelectItem>
                    <SelectItem value="to">TO</SelectItem>
                    <SelectItem value="otkp">OTKP</SelectItem>
                    <SelectItem value="akl">AKL</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.jurusan ? (
                  <XCircle
                    size={20}
                    className="absolute ml-[17rem] translate-y-6 text-red-500"
                  />
                ) : null}
                {formik.errors.jurusan ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.jurusan}
                  </div>
                ) : null}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              disabled={newAbsenSiswaIsLoading}
              className="flex justify-center items-center gap-2"
              type="submit"
            >
              {newAbsenSiswaIsLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Kirim Absen <Send size={15}></Send>
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-center items-center w-full p-4">
              <div className="p-4 bg-green-100 rounded-full">
                <CircleCheckBigIcon className="h-[2.5rem] w-[2.5rem] text-green-500" />
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              Terimakasih!<br></br>Anda berhasil melakukan absensi wisuda 2024
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => router.push("/")}>
              Oke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
