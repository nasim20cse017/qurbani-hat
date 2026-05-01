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
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
        setMenuOpen(false);
    };

    return (
        <header className="bg-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} width={45} height={45} alt="Logo" />
                    <h1 className="text-xl md:text-2xl font-semibold">
                        <span className="font-bold">Qurbani</span>
                        <span className="font-light ml-1">Hat</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-semibold text-lg">
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

                {/* Auth Desktop */}
                <div className="hidden md:flex items-center gap-4">

                    {isPending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 font-semibold">
                                    Hi, {user.name}
                                </span>

                                <Image
                                    src={user.image || userAvatar}
                                    width={35}
                                    height={35}
                                    alt="user"
                                    className="rounded-full"
                                />
                            </div>

                            <Link href="/my-profile"><button
                                className="btn btn-sm bg-green-500 text-white hover:bg-blue-500 flex items-center gap-1"
                            >
                               <FiUser className="text-xl" /> My Profile
                            </button></Link>
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
                    className="md:hidden text-2xl"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">

                    <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                        <FiHome /> Home
                    </Link>

                    <Link href="/all-animals" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                        <FiGrid /> All Animals
                    </Link>

                    <hr />

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

                            <button
                                onClick={handleLogout}
                                className="w-full btn bg-red-500 text-white"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Link href="/login" onClick={() => setMenuOpen(false)}>
                                <button className="w-full btn bg-green-500 text-white">
                                    <FiLogIn /> Login
                                </button>
                            </Link>

                            <Link href="/register" onClick={() => setMenuOpen(false)}>
                                <button className="w-full btn bg-blue-500 text-white">
                                    <FiUserPlus /> Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;