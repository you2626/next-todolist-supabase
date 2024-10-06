
import AddTask from "@/app/components/AddTask";
import Link from "next/link";

export default function (){
    return (
        <div>
            <Link href="/todos">戻る</Link>    
            <AddTask />
        </div>
    )
}