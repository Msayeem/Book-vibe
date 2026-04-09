import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa'; // Install react-icons if you haven't

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyles = ({ isActive }) =>
        isActive
            ? 'text-green-500 border border-green-500 rounded-lg font-semibold px-4 py-2 bg-green-50/10'
            : 'font-semibold px-4 py-2 hover:text-green-500 transition-colors';

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="py-5 flex justify-between items-center w-[90%] mx-auto">
                {/* Logo */}
                <h1 className="font-bold text-[24px]">Book Vibe</h1>

                {/* Desktop Links - Hidden on mobile */}
                <div className="hidden lg:flex items-center gap-2">
                    <NavLink to="/" className={linkStyles}>Home</NavLink>
                    <NavLink to="/books" className={linkStyles}>Listed Books</NavLink>
                </div>

                {/* Desktop Buttons - Hidden on mobile */}
                <div className="hidden lg:flex items-center gap-3">
                    <button className="text-[18px] font-semibold text-white px-5 py-2 rounded-[10px] bg-[#23BE0A] hover:bg-[#1ea308] transition-all">
                        Sign In
                    </button>
                    <button className="text-[18px] font-semibold text-white px-5 py-2 rounded-[10px] bg-[#59C6D2] hover:bg-[#4ab1bc] transition-all">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Toggle - Visible only on mobile */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-2xl text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] border-b pb-6' : 'max-h-0'}`}>
                <div className="flex flex-col items-center gap-4 w-[90%] mx-auto">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyles}>Home</NavLink>
                    <NavLink to="/books" onClick={() => setIsOpen(false)} className={linkStyles}>Listed Books</NavLink>
                    
                    <div className="flex flex-col w-full gap-3 pt-4">
                        <button className="w-full text-[18px] font-semibold text-white px-3 py-2 rounded-[10px] bg-[#23BE0A]">
                            Sign In
                        </button>
                        <button className="w-full text-[18px] font-semibold text-white px-3 py-2 rounded-[10px] bg-[#59C6D2]">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;