"use client"
import Link from "next/link"
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} relative group `}>
            {title}

            <span className={`h-[1px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] case duration-300 ${pathname === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}


export default function Navbar() {

    const [mode, setMode] = useThemeSwitcher();




    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>

            <nav>
                <CustomLink href="/" title="Home" className="mr-2" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Articles" className="ml-4" />
            </nav>

            <nav className="flex justify-center items-center flex-wrap">
                <motion.a
                    href="https://github.com"
                    target="_blank"
                    whileHover={{ y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="https://github.com"
                    target="_blank"
                    whileHover={{ y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    href="https://github.com"
                    target="_blank"
                    whileHover={{ y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="https://github.com"
                    target="_blank"
                    whileHover={{ y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3 rounded-full bg-light"
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a
                    href="https://github.com"
                    target="_blank"
                    whileHover={{ y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3"
                >
                    <DribbbleIcon />
                </motion.a>


                <button
                onClick={() =>setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1  ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    
                    {
                        mode === "dark" ? 
                        <SunIcon className={"fill-dark"}/>
                        : 
                        <MoonIcon className={"fill-dark"}/>
                    }
                </button>



            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[50%]">
                <Logo />
            </div>
        </header>
    )
}
