import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    access_token:string | null,
    user?:any
}

const initialState: IState = {
    access_token: localStorage.getItem("x-auth-access_token") || null,
    user: null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken: (state, action: PayloadAction<IState>) => {
            state.access_token = action.payload.access_token
            localStorage.setItem("x-auth-access_token", state.access_token || "")
        },
        removeToken: (state) => {
            state.access_token = null
        }
    }
})

export const {setToken, removeToken} = authSlice.actions
export default authSlice.reducer