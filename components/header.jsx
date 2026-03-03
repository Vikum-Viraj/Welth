"use client"
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import NextLink from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Authenticated, Unauthenticated } from 'convex/react'
import { Button } from './ui/button'
import { BarLoader } from 'react-spinners'

const header = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <NextLink href="/" className="flex items-center">
                        <Image src="/spott.png" alt="Spott Logo" width={40} height={40} className="h-11 w-full" priority />
                    </NextLink>

                    <div className='flex items-center'>
                        {/* Show the user button when the user is signed in */}
                        <Authenticated>
                            <UserButton />
                        </Authenticated>

                        <Unauthenticated>
                            <SignInButton mode='model'>
                                <Button size='sm'>Sign In</Button>
                            </SignInButton>
                        </Unauthenticated>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 w-full'>
                    <BarLoader width={'100%'} />
                </div>
            </nav>
        </>
    )
}

export default header