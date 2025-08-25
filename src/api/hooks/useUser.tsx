import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const user = "user";

export const useUser = () => {
  const client = useQueryClient();

  const getUser = () =>
    useQuery({
      queryKey: [user],
      queryFn: () => api.get("me").then((res) => res.data?.data),
      // gcTime: 1000 * 60 * 10, // cache saqlash vaqti
      // staleTime: 1000 * 60 // yangilash vaqti
    });

  const createUser = useMutation({
    mutationFn: (data: any) => api.post("signup", data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const sendOtp = useMutation({
    mutationFn: (data: any) => api.post("confirm-otp", data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const signIn = useMutation({
    mutationFn: (data: any) => api.post("signin", data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const uploadImage = useMutation({
    mutationFn: (formData: FormData) =>
      api.post("upload-profile-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [user] });
    },
  });

  const getImage = () =>
    useQuery({
      queryKey: [user],
      queryFn: () => api.get("users/get-image/123").then((res) => res.data),
    });

  return { createUser, signIn, sendOtp, getUser, uploadImage, getImage };
};
