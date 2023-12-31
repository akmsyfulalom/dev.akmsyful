"use client"
import Link from "next/link"
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import { DribbbleIcon, FbIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { useState } from "react";
import { useRouter } from 'next/navigation'





const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    console.log(router)

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick} >
            {title}

            <span className={`h-[1px] inline-block absolute bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] case duration-300 ${router === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}



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
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }




    return (
        <header className='w-full h-20 px-32 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>



            <button className="hidden lg:flex flex-col justify-center items-center" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0 : ' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">

                <nav>
                    <CustomLink href="/" title="Home" className="mr-2" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/articles" title="Articles" className="ml-4" />
                </nav>

                <nav className="flex justify-center items-center flex-wrap">
                    <motion.a
                        href="https://github.com/akmsyfulalom"
                        target="_blank"
                        whileHover={{ y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://twitter.com/AkmSyful"
                        target="_blank"
                        whileHover={{ y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/akmsyful/"
                        target="_blank"
                        whileHover={{ y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.pinterest.com/akmsyful/"
                        target="_blank"
                        whileHover={{ y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 rounded-full bg-light"
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/akmsyful.offical"
                        target="_blank"
                        whileHover={{ y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 sm:mx-1"
                    >
                        <FbIcon />
                    </motion.a>


                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1  ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >

                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                                :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>



                </nav>
            </div>


            {
                isOpen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}

                        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">

                        <nav className="flex flex-col justify-center items-center ">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                            <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
                        </nav>

                        <nav className="flex justify-center items-center flex-wrap">
                            <motion.a
                                href="https://github.com/akmsyfulalom"
                                target="_blank"
                                whileHover={{ y: 2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 rounded-full bg-light dark:bg-dark sm:mx-1"
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/AkmSyful"
                                target="_blank"
                                whileHover={{ y: 2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 sm:mx-1"
                            >
                                <TwitterIcon />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/akmsyful/"
                                target="_blank"
                                whileHover={{ y: 2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 sm:mx-1"
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a
                                href="https://www.pinterest.com/akmsyful/"
                                target="_blank"
                                whileHover={{ y: 2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 rounded-full bg-light sm:mx-1"
                            >
                                <PinterestIcon />
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/akmsyful.offical"
                                target="_blank"
                                whileHover={{ y: 2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 ml-3 sm:mx-1"
                            >
                                <FbIcon />
                            </motion.a>


                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1  ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >

                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} />
                                        :
                                        <MoonIcon className={"fill-dark"} />
                                }
                            </button>



                        </nav>
                    </motion.div>
                    :
                    null
            }

            <div className="absolute left-[45%] md:left-[33%] top-2 ">
                <Logo />
            </div>
        </header>
    )
}
