import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from "next/image";
const Projects = () => {
    return (
        <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className="text-center mb-2 text-lg font-Ovo">My Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt5 mb-12 font-Ovo">
                Welcome to my project portfolio! I'm a passionate software developer with experience in Angular, React and .Net frameworks. Here are some of the projects I've worked on.
            </p>
            <div className="grid grid-cols-3 my-10 gap-6 h-60">
                {workData.map((item, i) => (
                    <div
                        key={i}
                        className="border border-black rounded-lg overflow-hidden flex flex-col cursor-pointer group"
                    >
                        {/* 70% image */}
                        <div
                            className="flex-[0.7] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        ></div>

                        {/* 30% title section */}
                        <div className="flex-[0.3] bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100">
                            <h2 className="font-semibold text-center">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects
