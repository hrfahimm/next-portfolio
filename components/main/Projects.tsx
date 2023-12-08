/** @format */

import React from "react";
import ProjectsCard from "../sub/ProjectsCard";

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectsCard
                    src='/NextWebsite.png'
                    title='Morden Next Js Portfolio'
                    description='By default, Tailwind provides several opacity utilities for general purpose use. You can customize these values by editing '
                    url='https://github.com/hrfahimm/next-portfolio'
                />
                <ProjectsCard
                    src='/CardImage.png'
                    title=' Next Website'
                    description='By default, Tailwind provides several opacity utilities for general purpose use. You can customize these values by editing '
                    url='https://github.com/hrfahimm/next-portfolio'
                />
                <ProjectsCard
                    src='/SpaceWebsite.png'
                    title='Space Website'
                    description='By default, Tailwind provides several opacity utilities for general purpose use. You can customize these values by editing '
                    url='https://github.com/hrfahimm/next-portfolio'
                />
            </div>
        </div>
    );
};

export default Projects;
