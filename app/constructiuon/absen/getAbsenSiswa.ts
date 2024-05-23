import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const GetAbsenSiswa = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:8000/api"
    })
    return useQuery({
        queryKey: ['absen'],
        queryFn: async() => {
            const userResponse = await axiosInstance.get('/absen')
            return userResponse.data
        },
    })
}