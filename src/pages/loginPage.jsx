import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login() {
        if (!email || !password) {
            toast.error("Both email and password are required.");
            return;
        }

        axios
            .post("http://localhost:3000/api/users/login", { email, password })
            .then((res) => {
                if (!res.data.user) {
                    toast.error(res.data.message || "Invalid credentials. Please try again.");
                    return;
                }

                
                localStorage.setItem("token", res.data.token);

                if (res.data.user.type === "admin") {
                    toast.success("Admin login successful!", {
                        icon: '👏',
                        style: {
                          borderRadius: '10px',
                          background: '#333',
                          color: '#fff',
                        },
                      });
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.response?.data?.message || "An error occurred. Please try again.");
            });
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-red-300">
            <div className="flex flex-col justify-center items-center w-[450px] h-[450px] bg-slate-400 rounded-lg shadow-lg p-6">
                <img src="/freedom.jpeg" className="rounded-full w-[100px] h-[100px]" alt="freedom" />

                <div className="mt-4 w-full">
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <div className="mt-4 w-full">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                <button
                    className="mt-6 bg-yellow-300 hover:bg-lime-300 px-4 py-2 rounded-lg transition-colors"
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
