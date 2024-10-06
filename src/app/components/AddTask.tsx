"use client"

import { Input, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { addTodo, getAllTodos } from "../utils/supabaseFunction";
import TodoList from "./TodoList";

const AddTask=()=>{
    
    const [todos,setTodos]=useState<any>([]);
    const[title,setTitle]=useState<string>("");

    useEffect(()=>{
        const getTodos=async()=>{
            const todos =await getAllTodos();
            setTodos(todos);
            console.log(todos);
        };
        getTodos();
    },[]);

    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        console.log("a")

        await addTodo(title);
        setTitle("");
    };

    return(
        <section>
            <h3 className="text-2xl font-bold text-gray-700 py-5">TODO追加</h3>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="grid w-full items-center gap-4 max-w-xl">
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="title">タイトル</label>
                <Input type="text" placeholder="タイトルを入力" onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="description">内容</label>
                <Textarea placeholder="詳細を記載" />
                <button className="w-full-xl px-4 py-2 text-white bg-blue-500 rounded trasform hover:bg-blue-400 hover:scale-95">
            追加</button>
            </div>
        </div>
    </form>
    <TodoList todos={todos} />
    </section>
    )
};

export default AddTask;