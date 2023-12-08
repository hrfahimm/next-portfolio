/** @format */

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className='w-full h-16 fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 '>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-2.5 '>
                <a
                    href='#about-me'
                    className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src='/NavLogo.png'
                        alt='logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animated-slowspin'
                    />
                    <span className='font-bold ml-3 hidden md:block text-gray-300'>
                        Webchain Dev
                    </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20  '>
                    <div className='flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-4 px-5 py-2.5  rounded-full text-gray-400 '>
                        <a
                            href='#about-me'
                            className='cursor-pointer '>
                            {" "}
                            About{" "}
                        </a>
                        <a
                            href='#skills'
                            className='cursor-pointer '>
                            {" "}
                            Skills{" "}
                        </a>
                        <a
                            href='#projects'
                            className='cursor-pointer '>
                            {" "}
                            Projects{" "}
                        </a>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
