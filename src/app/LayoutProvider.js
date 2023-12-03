"use client"
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
export default function LayoutProvider({ children }) {
    const router = useRouter()
    return (
        <div>
            <AnimatePresence mode='wait' >

                <div key={router.push}>
                    {children}
                </div>
            </AnimatePresence>
        </div>
    )
}
