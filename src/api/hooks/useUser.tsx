import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from ".."

export const user = "user"

export const useUser = () => {
    const client = useQueryClient()

    const getUser = () => useQuery({
        queryKey: [user],
        queryFn: () => api.get("info/My_data_buydet").then(res => res.data?.data),
        // gcTime: 1000 * 60 * 10, // cache saqlash vaqti
        // staleTime: 1000 * 60 // yangilash vaqti
    })

    const createUser = useMutation({
        mutationFn:(data:any) => api.post("user/register", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey:[user]})
        }
    })

    const sendOtp = useMutation({
        mutationFn: (data:any) => api.post("verify/verify_Otp", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey:[user]})
        }
    })

    const signIn = useMutation({
        mutationFn: (data:any) => api.post("user/login", data),
        onSuccess: () => {
            client.invalidateQueries({queryKey:[user]})
        }
    })

    return {createUser, signIn, sendOtp, getUser}
}