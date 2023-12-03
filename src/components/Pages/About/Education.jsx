import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'



const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initia={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">{type}</h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">{time} | {place}</span>
            <p className="font-medium  w-full md:text-sm">{info}</p>
        </motion.div>
    </li>
}

export default function Education() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64 w-full flex flex-col items-center '>
            <h1 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>Education</h1>

            <div ref={ref} className='h-auto relative  md:w-full lg:w-[90%] w-[70%]'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[20px]" />
                <ul className="w-full flex flex-col items-start  justify-between ml-4 xs:ml-2 ">
                    <Details

                        type="Complete Web Development Course"
                        time="2022" place="Programming-hero"
                        info="From this course I learned HTML CSS JS React NextJS TailwindCSS Bootstrap NodeJS ExpressJS MongoDB NPM Package and Developer tools example Git, GitHub, OS for Dev, Browser Dev tools, Vercel, Netlify, hereku etc. "
                    />
                    <Details

                        type="Next Level Web Development"
                        time="2023" place="Programming-hero"
                        info="From this course I deeply learned advanced technologies Typescript, Mongoose, Redux, Prisma, Next.js, Craftsman, React Native, ExpressJS, NodeJS, AWS, Docker etc."
                    />
                    <Details

                        type="Bachelor of Social Science"
                        time="2021" place="Dakshin Surma Govt. College"
                        info="The academic degree of Bachelor of Social Science requires three years of study in the social sciences at an institution of higher education, primarily found in the Commonwealth of Nations."
                    />

                </ul>
            </div>
        </div>
    )
}
