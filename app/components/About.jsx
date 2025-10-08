import React from "react";
import Image from "next/image";
import { assets , infoList} from "../assets/assets";
const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-12 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.profile_img} alt="profile image" className="w-full rounded-3xl" />
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I'm a Software Engineer at Dell Technologies with a Master's in Management Information Systems from Texas A&M University. I specialize in building scalable software solutions, automating workflows, and applying machine learning to real-world problems. My experience spans software engineering, cloud support, and data-driven solutions at Dell and Amazon. Skilled in C#, Java Python, SQL, and modern frameworks such as React, .Net Core and AngularJS, I enjoy delivering reliable software that improve user experience.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                        {infoList.map((item, index) => (
                            <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 coursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 ">
                                <Image src={item.icon} alt={item.title} className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                </li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;