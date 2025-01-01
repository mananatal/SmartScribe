'use client'
import React, { useState } from 'react';
import Logo from '../Logo';
import { Button } from '../ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { IconLayoutDashboard } from '@tabler/icons-react';


function Navbar({handleSmoothScroll}) {
    const [active,setActive]=useState(0);
    const {user}=useUser();

    const navItems=[
        {
            id:"home",
            title:"Home"
        },
        {
            id:"about",
            title:"About Us"
        },
        {
            id:"features",
            title:"Features"
        },
        {
            id:"working",
            title:"How it Works"
        },
        {
            id:"testimonials",
            title:"Testimonials"
        }
    ]

    const handleNavItemClick=(e,id,index)=>{
        handleSmoothScroll(e, id);
        setActive(index);
    }


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative  z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Logo />
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        !user && <Link href={'/sign-in'}>
                            <Button 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Get started
                            </Button>
                        </Link>
                    }
                     {
                        user && 
                        <div className='flex gap-2 items-center'>
                            <Link href={'/dashboard'}>
                                <Button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <IconLayoutDashboard/>
                                    Dashboard
                                </Button>
                            </Link>
                            <UserButton/>
                        </div>
                    }
                    
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            navItems.map((item,index)=>(
                                <li key={index}>
                                    <Link 
                                        href={`#${item.id}`}
                                        className={`block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${active==index?"text-blue-700":"text-gray-900 "}`}
                                        aria-current="page"
                                        onClick={(e) => handleNavItemClick(e, `#${item.id}`,index)}    
                                    >   
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
