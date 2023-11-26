import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MediaController from '@/components/MediaController'

const dummy = () => {
    return (
        <>
            <MaxWidthWrapper>
                <div className='flex flex-col sm:flex-row items-center justify-evenly w-full h-screen border-2 bg-slate-200 '>
                    <MediaController />
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default dummy