'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {

    const pathname = usePathname();

    const isActive = href === pathname;

    // console.log('pathname', pathname);
    return (
        <Link href={href} className={`${isActive ? "border-b-3 border-b-green-500 text-green-500" : ""}`}>
            {children}
        </Link>
    );
};

export default Navlink;