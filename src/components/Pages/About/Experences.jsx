import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'



const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initia={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize dark:text-primaryDark">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">{time} | {address}</span>
            <p className="font-medium w-full xs:text-sm">{work}</p>
        </motion.div>
    </li>
}

export default function Experences() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64 w-full flex flex-col items-center '>
            <h1 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h1>

            <div ref={ref} className='h-auto relative  md:w-full lg:w-[90%] w-[70%]'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[20px]"/>
                <ul className="w-full flex flex-col items-start  justify-between ml-4 xs:ml-2 ">
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details

                        position="Software Engineer" company="Google"
                        companyLink="www.google.com"
                        time="2022-Present" address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </div>
    )
}
