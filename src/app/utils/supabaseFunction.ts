import {supabase} from "../utils/supabase";

export const getAllTodos=async()=>{
    const todos =await supabase.from("todo").select("*");
    return todos.data;
};

export const addTodo= async(title:string) =>{
    console.log(title)
    await supabase.from("todo").insert({title:title});
};