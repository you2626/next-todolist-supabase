import Link from "next/link";

export const Header =()=>{
    return(
        <header className="flex items-center justify-between gap-10 bg-gray-200 underline">
            <Link href='/todos'>トップページへ戻る</Link>
            <div className="flex items-center justify-end gap-3">
            <Link href="todos/create">TODO追加</Link>
            <Link href='/mypage'>マイページ</Link>
            </div>
        </header>
    )
};