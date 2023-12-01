"use client"
import Link from "next/link"
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} relative group `}>
            {title}

            <span className={`h-[1px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] case duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}


export default function Navbar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>

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
                    className="w-6 mx-3"
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
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[50%]">
                <Logo />
            </div>
        </header>
    )
}
