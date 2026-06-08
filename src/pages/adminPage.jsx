import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="flex w-full h-full ">
            <div className="flex flex-col text-white w-[360px]  h-full bg-red-900">
                <h1 className="text-2xl font-bold m-4">Using a tags</h1>
                <a href="/admin">Admin Dashboard</a>
                <a href="/admin/products">Products</a>
                <a href="/admin/users">Users</a>

                <h1 className="text-2xl font-bold m-4">Using Link component</h1>
                <Link to="/admin">Admin Dashboard</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
            </div>
            <div className="w-[calc(100%-360px)] bg-yellow-500 h-full">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>} />
                    <Route path="/products" element={<h1>Products Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                </Routes>
            </div>

        </div>
    )
}


//primary color: #f2f2f2
//secondary color: #333333
//accent color: #000080