import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    access_token:string | null,
    refresh_token:string | null,
    user?:any
}

const initialState: IState = {
    refresh_token: localStorage.getItem("x-auth-refresh_token") || null,
    access_token: localStorage.getItem("x-auth-access_token") || null,
    user: null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken: (state, action: PayloadAction<IState>) => {
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            localStorage.setItem("x-auth-access_token", state.access_token || "")
            localStorage.setItem("x-auth-refresh_token", state.access_token || "")
        },
        removeToken: (state) => {
            state.access_token = null
            state.refresh_token = null

        }
    }
})

export const {setToken, removeToken} = authSlice.actions
export default authSlice.reducer