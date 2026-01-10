import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {name: 'Pooja', age: 20},
    reducers: {
        setUser: (state, action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
        },
        setAge: (state, action)=>{
            state.age = action.payload.age
        }
    }
})

export const {setUser, setAge} = userSlice.actions;
export default userSlice.reducer;