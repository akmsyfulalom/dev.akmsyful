"use client"
/* eslint-disable react/no-unescaped-entities */

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from "next/image"
import profileImage from "../../../../public/images/profile/softwaredevelopersylhetakmsyful.JPG"
import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView } from "framer-motion"
import Skills from '@/components/Pages/About/Skills'
import Experences from '@/components/Pages/About/Experences'
import Education from '@/components/Pages/About/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref} />;
};


export default function page() {
    return (
        <>
        <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Programming Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 ' />
                    <div className=' w-full grid grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className="font-medium">Hi, I'm AKM SYFUL, a Full-stack web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 3 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.</p>

                            <p className="font-medium my-4">I believe that development is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users. </p>

                            <p className="font-medium">With a dedicated focus on delivering excellence and a user-centric approach, I consistently bring commitment and innovation to each project. I am eager to leverage my skills and enthusiasm to enhance the effectiveness of your upcoming endeavors. I look forward to contributing to the success of your project and collaborating on impactful solutions.</p>
                        </div>
                        <div className='col-span-3 xl:col-span-4 relative h-max rounded-2xl md:border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark dark:bg-light' />
                            <Image src={profileImage} alt="akm syful web developer" className="w-full h-auto rounded-2xl" priority sizes="(mix-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
                        </div>



                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl  font-bold md:text-5xl sm:3xl xs:text-2xl '>

                                    <AnimatedNumbers value={26} /> +
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied client's</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl  font-bold md:text-5xl sm:3xl xs:text-2xl '>
                                    <AnimatedNumbers value={26} /> +
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project's Completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl  font-bold md:text-5xl sm:3xl xs:text-2xl '>
                                    <AnimatedNumbers value={3} /> +
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experiences</h2>
                            </div>
                        </div>



                    </div>
                    <Skills />
                    <Experences />
                    <Education />
                </Layout>
            </main>
        </>

    )
}
