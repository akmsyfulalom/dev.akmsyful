import { motion } from 'framer-motion'




const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent dark:xs:bg-transparent xs:text-dark dark:xs:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}

            viewport={{ once: true }}
        >
            {name}
        </motion.div>

    )
}

export default function Skills() {
    return (
        <>
            <h1 className='font-bold text-8xl mt-48 w-full text-center md:text-6xl md:mt-32 mb-10'>Skills </h1>

            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
            
            lg:bg-circularLightLg dark:lg:bg-circularDarkLg
            md:bg-circularLightMd dark:ms:bg-circularDarkMd
            sm:bg-circularLightSm dark:sm:bg-circularDarkSm
            xs:bg-circularLightXs dark:xs:bg-circularDarkXs
            
            '>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                
                <Skill name="CSS" x="-5vw" y="-16vw" />
                <Skill name="HTML" x="-18vw" y="-16vw" />
                <Skill name="NodeJS" x="14vw" y="23vw" />
                <Skill name="ReactJS" x="-24vw" y="-8vw" />
                <Skill name="NextJS" x="-25vw" y="14vw" />
                <Skill name="Tailwind CSS" x="26vw" y="1vw" />
                <Skill name="MaterialUI" x="24vw" y="-20vw" />
                <Skill name="MongoDB" x="22vw" y="12vw" />
                <Skill name="Mongoose" x="18vw" y="-11vw" />
                <Skill name="Firebase" x="-8vw" y="24vw" />
                <Skill name="ExpressJS" x="-5vw" y="14vw" />
                <Skill name="Figma" x="4vw" y="-22vw" />
                <Skill name="Git GitHub" x="-25vw" y="2vw" />
                <Skill name="JavaScript" x="-13vw" y="-22vw" />
            </div>

        </>
    )
}
