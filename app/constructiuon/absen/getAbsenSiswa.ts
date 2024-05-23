import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const getAbsenSiswa = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:3000/api"
    })
    return useQuery({
        queryKey: ['absen'],
        queryFn: async() => {
            const userResponse = await axiosInstance.get('/absen')
            return userResponse.data
        },
    })
}