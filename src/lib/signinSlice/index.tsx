import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IState {
    email:string,
    password:string
}

const initialState: IState = {
    email:"",
    password:""
}

export const signInSlice = createSlice({
    name:"ign-in",
    initialState,
    reducers:{
        setSignInData:(state, action: PayloadAction<IState>) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        clearSignInData: (state) => {
            state.email = ""
            state.password = ""
        }
    }
})

export const {setSignInData, clearSignInData} = signInSlice.actions
export default signInSlice.reducer