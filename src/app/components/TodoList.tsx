import { Select } from "@chakra-ui/react";
import Link from "next/link";

export default function TodoList() {
    return (
        <div className="space-y-3">
            <ul>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>読書</span>        
                <div className="flex items-center">
                    <Select className="mr-2">
                        <option value='notStarted'>未着手</option>
                        <option value='inProgress'>作業中</option>
                        <option value='done'>完了</option>
                    </Select>
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>プログラミング</span>        
                <div className="flex items-center">
                    <Select className="mr-2">
                        <option value='notStarted'>未着手</option>
                        <option value='inProgress'>作業中</option>
                        <option value='done'>完了</option>
                    </Select>
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-400 rounded shadow">
                <span>買い物</span>        
                <div className="flex items-center">
                    <Select className="mr-2">
                        <option value='notStarted'>未着手</option>
                        <option value='inProgress'>作業中</option>
                        <option value='done'>完了</option>
                    </Select>
                    <button className="flex items-center  text-blue-500 bg-blue-100">
                        <Link href="/todos/id">編集</Link>
                        </button>
                </div>
            </li>
            </ul>
            </div>

    )
};