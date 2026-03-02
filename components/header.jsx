import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const header = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/spott.png" alt="Spott Logo" width={40} height={40} className="h-11 w-full" priority />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default header