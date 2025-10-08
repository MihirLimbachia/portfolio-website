import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";
const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-4">
        <div>
            <Image src = {assets.profile_img} className="rounded-full w-32" alt = "profile image"/>
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">Mihir Limbachia</h3>
            <p className="max-w-2xl mx-auto font-Ovo">
                I'm a software engineer from Texas with over 5 years of software development experience
            </p>
        <div className="flex flex-col sm: flex-row items-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/mihirlimbachia/" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2" target="_blank"><Image src= {assets.linkedin_icon} className="w-6" alt = "linkedin icon"/></a>
            <a href="/Mihir_Limbachia_Resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"><Image src= {assets.download_resume_icon} className="w-6" alt = "resume icon"/></a>
        </div>
        </div>     
    );
};

export default Header;