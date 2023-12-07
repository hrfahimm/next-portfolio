/** @format */
"use client";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className=' w-full h-full text-start  flex flex-col gap-5 justify-center m-auto '>
                <motion.div
                    variants={slideInFromTop}
                    className='  Welcome-box py-2 px-2   border  border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />

                    <h1 className='Welcome-text text-[13px]'>
                        Junnior Marnstack Developer
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] h-auto w-auto'>
                    <span>
                        Providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {" "}
                            the best{" "}
                        </span>
                        project expreience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'>
                    I&apos;m a Junnior Web Developer With expreience in Web
                    Desain and Development. Check Out My Projects And Skills
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                    Learn More!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image
                    src='/mainIconsdark.svg'
                    alt='Wark Icons'
                    width={650}
                    height={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
