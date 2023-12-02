import { motion } from 'framer-motion'




const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
            whileHover={{ scale: 1.05 }}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration: 1.5}}}
           
            viewport={{once: true}}
        >
            {name}
        </motion.div>

    )
}

export default function Skills() {
    return (
        <>
            <h1 className='font-bold text-8xl mt-48 w-full text-center'>Skills </h1>

            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="HTML" x="-20vw" y="-12vw" />
                <Skill name="NodeJS" x="14vw" y="15vw" />
                <Skill name="ReactJS" x="-11vw" y="-5vw" />
                <Skill name="NextJS" x="-16vw" y="7vw" />
                <Skill name="Tailwind CSS" x="26vw" y="2vw" />
                <Skill name="MaterialUI" x="24vw" y="-14vw" />
                <Skill name="MongoDB" x="12vw" y="6vw" />
                <Skill name="Mongoose" x="16vw" y="-6vw" />
                <Skill name="Firebase" x="-22vw" y="18vw" />
                <Skill name="ExpressJS" x="-5vw" y="12vw" />
                <Skill name="Figma" x="4vw" y="-20vw" />
                <Skill name="Git GitHub" x="-23vw" y="1vw" />
            </div>

        </>
    )
}
