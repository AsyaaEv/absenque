import { useMutation } from "@tanstack/react-query"
import axios from "axios"


export const newAbsenSiswa = ({onSuccess, onError}: any) => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:3000/api"
    })
    return useMutation({
        mutationFn: async(body: any) => {
            const userResponse = axiosInstance.post('/absen', body)
            return userResponse
        },
        onError,
        onSuccess
    })
}