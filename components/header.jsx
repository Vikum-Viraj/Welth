"use client"
import {
    SignInButton,
    UserButton,
} from '@clerk/nextjs'
import NextLink from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { Authenticated, Unauthenticated } from 'convex/react'
import { Button } from './ui/button'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from "../hooks/use-store-user"
import { Link as LinkIcon, Plus, Ticket, Building } from 'lucide-react'

const header = () => {

    const { isLoading } = useStoreUser()
    const [showUpgradeModal, setShowUpgradeModal] = useState(false)

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
                            <Button size="sm" asChild className="flex gap-2 mr-4">
                                <NextLink href="/create-event" className="flex items-center">
                                    <Plus className="w-4 h-4" />
                                    <span className="hidden sm:inline">Create Event</span>
                                </NextLink>
                            </Button>
                            <Button variant={"ghost"} size='sm' onClick={() => setShowUpgradeModal(true)}>
                                Pricing
                            </Button>
                            <Button variant={"ghost"} size='sm' asChild className={"mr-2"}>
                                <NextLink href='explore'>Explore</NextLink>
                            </Button>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="My Tickets"
                                        labelIcon={<Ticket size={16} />}
                                        href="/my-tickets"
                                    />
                                    <UserButton.Link
                                        label="My Events"
                                        labelIcon={<Building size={16} />}
                                        href="/my-events"
                                    />
                                    <UserButton.Action label="manageAccount" />
                                </UserButton.MenuItems>
                            </UserButton>
                        </Authenticated>

                        <Unauthenticated>
                            <SignInButton mode='model'>
                                <Button size='sm'>Sign In</Button>
                            </SignInButton>
                        </Unauthenticated>
                    </div>
                </div>

                {isLoading && (
                    <div className='absolute bottom-0 left-0 w-full'>
                        <BarLoader width={'100%'} color='#855f7' />
                    </div>
                )}
            </nav>
        </>
    )
}

export default header