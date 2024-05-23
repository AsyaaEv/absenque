import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export const POST = async(req: NextRequest) => {
    const {nama, kelas, jurusan} = await req.json()
    const prisma = new PrismaClient()
    
    try {
        const user = await prisma.siswa.create({
            data: {
                nama: nama,
                kelas: kelas,
                jurusan: jurusan
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(
            {'message' : 'Nama sudah digunakan'},
            {'status': 400}
        )
    }
}

export const GET = async(req: NextRequest) => {
    const prisma = new PrismaClient()
    
    try {
        const user = await prisma.siswa.findMany({})
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(
            {'message' : 'Nama sudah digunakan'},
            {'status': 400}
        )
    }
}