import TodoList from "@/app/components/TodoList";
import Link from "next/link";

export default function todoId() {
    return (
        <div className="w-full max-w-xl">
            <h2>TODO情報</h2>
            <div className="space-y-3">
            <ul>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>読書</span>        
                <div className="flex items-center">
                    
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>プログラミング</span>        
                <div className="flex items-center">
                    
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>買い物</span>        
                <div className="flex items-center">
                    
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            </ul>
            </div>
        </div>
    )
}