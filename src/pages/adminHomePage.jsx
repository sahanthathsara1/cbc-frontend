import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHomePage() {
    return (
        <div className="bg-slate-500 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[300px] h-screen bg-blue-200 flex flex-col justify-center space-y-4 p-4">
                <Link 
                    to="/admin/dashboard" 
                    className="text-blue-700 hover:underline">
                    Dashboard
                </Link>
                <Link 
                    to="/admin/users" 
                    className="text-blue-700 hover:underline">
                    Users
                </Link>
                <Link 
                    to="/admin/products" 
                    className="text-blue-700 hover:underline">
                    Products
                </Link>
                <Link 
                    to="/admin/orders" 
                    className="text-blue-700 hover:underline">
                    Orders
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center text-white">
                <h1>Welcome to Admin Dashboard</h1>
            </div>
        </div>
    );
}
