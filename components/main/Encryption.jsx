/** @format */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Encryption = () => {
    return (
        <div className='flex flex-row relative items-center justify-center min-h-screen w-full h-3/4'>
            <div className='absolute w-auto h-auto top-12 z-[5]'>
                <motion.div
                    variants={slideInFromTop}
                    className='text-4xl font-medium text-center text-gray-200'>
                    Performance
                    <span className='text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500'>
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>
            <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
                <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                    <Image
                        src='/LockTop.png'
                        alt='Lock Top'
                        width={50}
                        height={50}
                        className=' w-12 translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                    />
                    <Image
                        src='/LockMain.png'
                        alt='Lock Main'
                        width={70}
                        height={70}
                        className='z-10'
                    />
                </div>
                <div className='Welcome-box px-4 py-1  z-[20] border my-5 border-[#7042f88b] opacity-90 '>
                    <h1 className='Welcome-text text-xs'>Encription</h1>
                </div>
            </div>
            <div className='absolute z-[20] bottom-12 px-1 '>
                <div className='cursive text-lg font-medium text-center text-gray-300'>
                    Secure Your Data With end to end encription
                </div>
            </div>
            <div className='w-full flex items-start justify-center absolute'>
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload='false'
                    className='w-4/5 h-auto'
                    src='/encryption.webm'
                />
            </div>
        </div>
    );
};

export default Encryption;
