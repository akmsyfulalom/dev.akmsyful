import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'



const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <motion.div
            initia={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize text-2xl font-bold">{position}&nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75">{time} | {address}</span>
            <p className="font-medium  w-full">{work}</p>
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
        <div className='my-64'>
            <h1 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h1>

            <div ref={ref} className=' h-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />
                <ul className="w-full flex flex-col items-start ml-4 justify-between">
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