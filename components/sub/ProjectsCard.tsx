/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
    src: string;
    description: string;
    title: string;
    url: string;
}
const ProjectsCard = ({ src, title, description, url }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-contain'
            />

            <div className='relative p-4 flex flex-row'>
                <div className=''>
                    <h1 className='text-2xl font-semibold text-white'>
                        {title}
                    </h1>
                    <p className='mt-2 text-gray-300 '>{description} </p>
                </div>
                <div className=''>
                    <Link
                        href='https://github.com/hrfahimm/next-portfolio'
                        className='cursor-pointer'>
                        <Image
                            src='/gitwhite.png'
                            alt='logo'
                            width={70}
                            height={70}
                            className='cursor-pointer hover:animated-slowspin'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
