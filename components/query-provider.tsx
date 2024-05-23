"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useState } from "react"

const QueryProvider = ({children} : {children : React.ReactNode}) => {
    const [queryClient] = useState(
        () => 
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: Infinity,
                    refetchOnWindowFocus : false,
                },
            },
        })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider