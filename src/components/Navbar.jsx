'use client'

import React, { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {


    // const { data: session, isPending, isLoading } = authClient.useSession()

    // const user = session?.user;

    // console.log(user)

    return (
        <div className='bg-gray-200 py-5'>
            <div className='flex justify-between items-center container mx-auto'>
                <Link href="./"><h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    <span className="font-bold">Qurbani</span>
                    <span className="font-light ml-1">Hat</span>
                </h1></Link>
                <ul className='flex gap-4 justify-center items-center text-2xl text-gray-700'>
                    <li className='font-bold'><Navlink href="/">Home</Navlink></li>
                    <li className='font-bold'><Navlink href="/about">All Animals</Navlink></li>
                </ul>

                <div className='flex gap-4'> 
                    <Link href="/login"><button className='btn bg-black text-white font-bold'>Login</button></Link>
                    <Link href="/register"><button className='btn bg-black text-white font-bold'>Register</button></Link>
                </div>


            </div>
        </div>
    );
};

export default Navbar;