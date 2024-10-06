import { Header } from "../components/Header"
import TodoList from "../components/TodoList"

export default function() {
    return (
        <main>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
                <h1 className="text-4xl font-bold text-gray-700 -mt-32">TODO一覧</h1>
                <div className="w-full max-w-xl">
                <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
                    <TodoList />
                </div>
                </div>
            </div>
        </main>
    )
};