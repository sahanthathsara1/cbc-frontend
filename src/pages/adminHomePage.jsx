import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { BsGraphUp } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FaProductHunt } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import AdminProductPage from './admin/adminProductPage'; // Import the AdminProductPage
import AdminProductAdd from './admin/adminProductAdd'; // Import the AdminProductAdd




export default function AdminHomePage() {
    return (
        <div >
        <div className="bg-slate-500 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[300px] h-screen bg-blue-200 flex flex-col justify-center space-y-4 p-4">
                <Link 
                    to="/admin/dashboard" 
                    className="flex items-center text-blue-700 hover:text-black"
                >
                    <BsGraphUp className="text-xl text-black" />
                    <span className="ml-2">Dashboard</span>
                </Link>
                <Link 
                    to="/admin/users" 
                    className="flex items-center text-blue-700 hover:text-black"
                >
                    <BiUserCircle className="text-xl text-black" />
                    <span className="ml-2">Users</span>
                </Link>
                <Link 
                    to="/admin/products" 
                    className="flex items-center text-blue-700 hover:text-black"
                >
                    <FaProductHunt className="text-xl text-black" />
                    <span className="ml-2">Products</span>
                </Link>
                <Link 
                    to="/admin/orders" 
                    className="flex items-center text-blue-700 hover:text-black"
                >
                    <FiPackage className="text-xl text-black" />
                    <span className="ml-2">Orders</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center text-white">
                <Routes>
                    {/* Redirect the root path to the dashboard */}
                    <Route path="/" element={<Navigate to="/admin/dashboard" />} />
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/products" element={<AdminProductPage />} />
                    <Route path="/products/addProduct" element={<AdminProductAdd />} />
                    <Route path="/orders" element={<h1>Orders</h1>} />

                </Routes>
            </div>
        </div>
        </div>
    );
}
