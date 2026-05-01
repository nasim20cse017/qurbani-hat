'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import logo from '@/assets/cow.png';
import userAvatar from '@/assets/user.png';

import {
    FiMenu,
    FiX,
    FiHome,
    FiGrid,
    FiLogOut,
    FiLogIn,
    FiUserPlus,
    FiUser
} from "react-icons/fi";

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
        setMenuOpen(false);
    };

    return (
        <header className="bg-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} width={40} height={40} alt="Logo" />
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold whitespace-nowrap">
                            <span className="font-bold">Qurbani</span>
                            <span className="font-light ml-1">Hat</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-semibold">
                        <Navlink href="/">
                            <span className="flex items-center gap-1">
                                <FiHome /> Home
                            </span>
                        </Navlink>

                        <Navlink href="/all-animals">
                            <span className="flex items-center gap-1">
                                <FiGrid /> All Animals
                            </span>
                        </Navlink>
                    </nav>

                    {/* Desktop Auth */}
                    <div className="hidden lg:flex items-center gap-3">

                        {isPending ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : user ? (
                            <>
                                <div className="flex items-center gap-2 max-w-[150px] truncate">
                                    <Image
                                        src={user.image || userAvatar}
                                        width={32}
                                        height={32}
                                        alt="user"
                                        className="rounded-full"
                                    />
                                    <span className="text-green-600 text-sm font-semibold truncate">
                                        {user.name}
                                    </span>
                                </div>

                                <Link href="/my-profile">
                                    <button className="btn btn-sm bg-green-500 text-white hover:bg-blue-500 flex items-center gap-1">
                                        <FiUser /> Profile
                                    </button>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex items-center gap-1"
                                >
                                    <FiLogOut /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <button className="btn btn-sm bg-green-500 text-white hover:bg-blue-500 flex items-center gap-1">
                                        <FiLogIn /> Login
                                    </button>
                                </Link>

                                <Link href="/register">
                                    <button className="btn btn-sm bg-blue-500 text-white hover:bg-green-500 flex items-center gap-1">
                                        <FiUserPlus /> Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-2xl"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 bg-white shadow-md space-y-4">

                    {/* Nav Links */}
                    <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2">
                        <FiHome /> Home
                    </Link>

                    <Link href="/all-animals" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2">
                        <FiGrid /> All Animals
                    </Link>

                    <hr />

                    {/* Auth Section */}
                    {isPending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : user ? (
                        <div className="space-y-3">

                            <div className="flex items-center gap-2">
                                <Image
                                    src={user.image || userAvatar}
                                    width={35}
                                    height={35}
                                    alt="user"
                                    className="rounded-full"
                                />
                                <span className="text-green-600 font-semibold">
                                    {user.name}
                                </span>
                            </div>

                            <Link href="/my-profile" onClick={() => setMenuOpen(false)}>
                                <button className="w-full btn bg-green-500 text-white flex items-center justify-center gap-2">
                                    <FiUser /> My Profile
                                </button>
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="w-full btn bg-red-500 text-white flex items-center justify-center gap-2"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Link href="/login" onClick={() => setMenuOpen(false)}>
                                <button className="w-full btn bg-green-500 text-white flex items-center justify-center gap-2">
                                    <FiLogIn /> Login
                                </button>
                            </Link>

                            <Link href="/register" onClick={() => setMenuOpen(false)}>
                                <button className="w-full btn bg-blue-500 text-white flex items-center justify-center gap-2">
                                    <FiUserPlus /> Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;