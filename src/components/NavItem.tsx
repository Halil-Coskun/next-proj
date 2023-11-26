"use client"

import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category,
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({ isOpen, isAnyOpen, handleOpen, category }: NavItemProps) => {
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                <Button className='gap-1.5' onClick={handleOpen} variant={isOpen ? "secondary" : "ghost"}>
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",
                        { "-rotate-180": isOpen }
                    )} />
                </Button>
            </div>
            {isOpen ? (
                <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foregroud",
                    { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen }
                )}>
                <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true'/>
                </div>
            ) : null}
        </div>
    )
}

export default NavItem