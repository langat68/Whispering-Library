import Navbar from "../components/Navbar";
import loginPic from '../assets/login.png';
import { NavLink } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="grid sm:grid-cols-2 gap-1 h-screen bg-base-200">
                <div className="flex flex-col items-center justify-center p-6 sm:order-first m-5 bg-base-100 shadow-lg rounded-lg">
                    <form className="w-full max-w-md space-y-4">
                        <h2 className="text-4xl font-bold mb-6 text-center">Register</h2>
                        <label className="block">
                            <span className="text-gray-700">Full Name</span>
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Phone</span>
                            <input type="text" placeholder="Phone" className="input input-bordered w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Address</span>
                            <input type="text" placeholder="Address" className="input input-bordered w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Email</span>
                            <input type="email" placeholder="Email" className="input input-bordered w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Password</span>
                            <input type="password" placeholder="Password" className="input input-bordered w-full mt-1" />
                        </label>
                        <button type="submit" className="btn btn-outline btn-info w-full mt-4">Register</button>
                        <NavLink to="/" className="text-center text-blue-500 hover:underline mt-4 block">
                            🏡 Go to HomePage
                        </NavLink>
                    </form>
                </div>
                <div className="flex items-center justify-center bg-base-300 p-6">
                    <img src={loginPic} alt="Registration Illustration" className="max-w-full h-auto rounded-lg" />
                </div>
            </div>
        </>
    );
}
