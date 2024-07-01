import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, ChangeEvent } from "react";

const Navbar = () => {
    // State to manage the visibility of the search form
    const [isSearchVisible, setSearchVisible] = useState(false);
    // State to store the current search query
    const [searchQuery, setSearchQuery] = useState("");
    // Hook to navigate programmatically
    const navigate = useNavigate();

    // Toggle the visibility of the search form
    const handleSearchToggle = () => {
        setSearchVisible(!isSearchVisible);
    };

    // Update the search query state when the input value changes
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Handle the form submission
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Navigate to the search results page with the query
        navigate(`/search?query=${searchQuery}`);
        // Hide the search form
        setSearchVisible(false);
    };

    return (
        <div className="navbar bg-base-100 ml-2">
            {/* Navbar start section */}
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    {/* Hamburger menu button */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    {/* Dropdown menu items */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="hover:text-indigo-500 text-xl"><Link to="/">Home</Link></li>
                        <li className="hover:text-indigo-500"><Link to="/dashboard">Dashboard</Link></li>
                        <li className="hover:text-indigo-500"><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-indigo-500"><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                {/* Navbar title */}
                <a className="btn btn-ghost text-lg ml-2 text-orange-600 text-2xl">Whispering Pages Library</a>
            </div>
            {/* Navbar center section */}
            <div className="navbar-center hidden lg:flex">
                {/* Horizontal menu items */}
                <ul
                    tabIndex={0}
                    className="menu menu-horizontal bg-base-300 rounded-box z-[2] mt-5 w-full p-3 shadow flex">
                    <li className="hover:text-orange-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-orange-500"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="hover:text-orange-500"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-orange-500"><Link to="/register">Register</Link></li>
                </ul>
            </div>
            {/* Navbar end section */}
            <div className="navbar-end">
                {/* Search button */}
                <button className="btn btn-ghost btn-circle" onClick={handleSearchToggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                {/* Search form, visible when isSearchVisible is true */}
                {isSearchVisible && (
                    <form onSubmit={handleSearchSubmit} className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="input input-bordered"
                            placeholder="Search..."
                        />
                        <button type="submit" className="btn btn-ghost btn-circle ml-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                )}
                {/* Notification button */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
