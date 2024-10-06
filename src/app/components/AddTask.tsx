import { Input, Textarea } from "@chakra-ui/react";

export default function AddTask(){
    return(
        <form>
        <div className="grid w-full items-center gap-4 max-w-xl">
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="title">タイトル</label>
                <Input id="title" placeholder="タイトルを入力" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="description">内容</label>
                <Textarea placeholder="詳細を記載" />
                <button className="w-full-xl px-4 py-2 text-white bg-blue-500 rounded trasform hover:bg-blue-400 hover:scale-95">
            追加</button>
            </div>
        </div>
    </form>
    )
};