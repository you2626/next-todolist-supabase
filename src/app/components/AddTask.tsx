"use client"

import { Input, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllTodos } from "../utils/supabaseFunction";

const AddTask=()=>{
    
    const [todos,setTodos]=useState<any>([]);

    useEffect(()=>{
        const getTodos=async()=>{
            const todos =await getAllTodos();
            setTodos(todos);
            console.log(todos);
        };
        getTodos();
    },[]);

    return(
        <section>
            <h3 className="text-2xl font-bold text-gray-700 py-5">TODO追加</h3>
        <form>
        <div className="grid w-full items-center gap-4 max-w-xl">
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="title">タイトル</label>
                <Input type="text" placeholder="タイトルを入力" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="description">内容</label>
                <Textarea placeholder="詳細を記載" />
                <button className="w-full-xl px-4 py-2 text-white bg-blue-500 rounded trasform hover:bg-blue-400 hover:scale-95">
            追加</button>
            </div>
        </div>
    </form>
    </section>
    )
};

export default AddTask;