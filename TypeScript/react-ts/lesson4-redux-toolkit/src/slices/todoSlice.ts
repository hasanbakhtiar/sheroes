import { todoType } from "../types/todos.model";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



const initialState:todoType[] = [
    {
        id:"1",
        text:"Learn lesson"
    },
    {
        id:"2",
        text:"Read book"
    }
];

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action)=>{
            const newTodo = {id:uuidv4(),text:action.payload}
            state.push(newTodo);
        }
    }
    
})


export default todoSlice.reducer;
export const {add} = todoSlice.actions;