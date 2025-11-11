import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
const Navbar = () => {
    const sideMenuRef = React.useRef();
    const [isScrolling, setIsScrolling] = useState(false);
    const openSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }

     const closeSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(+16rem)";
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsScrolling(true);
            } else {
               setIsScrolling(false);
            }
        })
    }, [])

    return (
        <>
        <div className="fixed top-0 right-0 w-3/5 -z-16 translate-y-[-80%]">
            <Image src = {assets.header_bg_color} className="w-full" alt = "header bg color"/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 ${isScrolling ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}> 
            <ul className= {`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolling ? "" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"}`}>
                <li className="font-Ovo">
                    <a href="#top">Home</a>
                </li>
                <li className="font-Ovo">
                    <a href="#about">About</a>
                </li>
                <li className="font-Ovo">
                    <a href="#projects">Projects</a>
                </li>
                <li className="font-Ovo">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-40 z-50 h-screen bg-rose-50 transition duration-500`}>
                <div className="absolute top-6 right-6" onClick={closeSideMenu}>
                    <Image src = {assets.close_black} className="w-5 cursor-pointer" alt = "close icon"/>
                </div>
                <li className="font-Ovo" onClick={closeSideMenu}>
                    <a href="#top">Home</a>
                </li>
                <li className="font-Ovo" onClick={closeSideMenu}>
                    <a href="#about">About</a>
                </li>
                <li className="font-Ovo"  onClick={closeSideMenu}>
                    <a href="#projects">Projects</a>
                </li>
                <li className="font-Ovo" onClick={closeSideMenu}> 
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        </>     
    );
};

export default Navbar;