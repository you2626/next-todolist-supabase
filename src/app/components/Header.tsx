import Link from "next/link";

export const Header =()=>{
    return(
        <header className="flex items-center justify-center gap-10 bg-gray-200 underline">
            <Link href='/'>トップページへ戻る</Link>
            <Link href='/mypage'>マイページ</Link>
            <Link href="todos/create">TODO追加</Link>
        </header>
    )
};