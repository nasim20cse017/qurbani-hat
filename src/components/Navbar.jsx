'use client'

import React, { use, useState } from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import logo from '@/assets/cow.png'


const Navbar = () => {


    const { data: session, isPending, isLoading } = authClient.useSession()

    const user = session?.user;

    // console.log(user)




    return (
        <div className='bg-gray-200 py-5'>
            <div className='flex justify-between items-center container mx-auto'>
                <Link className='flex items-center' href="./"><Image src={logo} width={50} height={50} alt="Logo"></Image><h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    <span className="font-bold">Qurbani</span>
                    <span className="font-light ml-1">Hat</span>
                </h1></Link>
                <ul className='flex gap-4 justify-center items-center text-2xl text-gray-700'>
                    <li className='font-bold'><Navlink href="/">Home</Navlink></li>
                    <li className='font-bold'><Navlink href="/all-animals">All Animals</Navlink></li>
                </ul>

            {isPending ? <span className="loading loading-spinner loading-sm text-black"></span> : user ? (<div className='flex justify-between items-center gap-4'>
                <h2 className='text-purple-500 font-bold'>Hello, {user.name}</h2>
                <Image src={user.image || userAvatar} alt='User Avatar' width={40} height={30}></Image>
                <button className='btn bg-green-400 hover:bg-blue-400 text-white font-bold' onClick={async () => {
                    await authClient.signOut();
                }}>Logout</button>
            </div>) : (<div className='flex gap-4'> 
                    <Link href="/login"><button className='btn bg-green-400 hover:bg-blue-400 text-white font-bold'>Login</button></Link>
                    <Link href="/register"><button className='btn bg-green-400 hover:bg-blue-400 text-white font-bold'>Register</button></Link>
                </div>
            )}

                {/* <div className='flex gap-4'> 
                    <Link href="/login"><button className='btn bg-green-400 hover:bg-blue-400 text-white font-bold'>Login</button></Link>
                    <Link href="/register"><button className='btn bg-green-400 hover:bg-blue-400 text-white font-bold'>Register</button></Link>
                </div> */}


            </div>
        </div>
    );
};

export default Navbar;