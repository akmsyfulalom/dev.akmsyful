import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/akmsyfulsoftwaredeveloper.png"
import BulbImage from "../../public/images/svgs/miscellaneous_icons_1.svg"
import AnimatedText from '@/components/AnimatedText'
import Link from "next/link"
import { LinkArrow } from '@/components/Shared/Icons'
import HireMe from '@/components/Pages/Home/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Akm Syful Alom" className='w-full h-auto lg:hidden md:inline-block md:w-full ' priority sizes="(mix-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="My purpose is to elevate aspiring and established advancing  projects to the next level" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Full Stack Web App Development.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/AKM_SYFUL_ALOM_Resume.pdf" target='_blank' className='flex items-center bg-dark p-2.5 text-light px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light  md:p-2  md:px-4 md:text-base' download={true}>Resume <LinkArrow className="w-6 ml-1" /></Link>
                <Link href="mailto:akmsyfulbd12@gmail.com" target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-0 inline-block w-24 md:hidden'>
          <Image src={BulbImage} alt="akm syful developer" className='w-full h-auto' />
        </div>
      </div>
    </>

  )
}
