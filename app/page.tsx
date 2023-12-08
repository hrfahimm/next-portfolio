/** @format */

import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";

export default function Home() {
    return (
        <main className='h-full w-full'>
            <div className='flex flex-col gap-20'>
                <Hero />
                <Skills />
                <Encryption />
            </div>
        </main>
    );
}
