import React from 'react'

const MediaController = () => {
    return (
        <div className='flex flex-row h-1/5 w-6/12 border-slate-100 bg-white rounded-sm'>
            <div className='flex flex-col h-full w-3/5 bg-slate-50 rounded-xl'>
                <div className='top-5 h-6 bottom-4'>
                    <h5 className='text-center text-xl'> Live From Space </h5>
                </div>
                <div className=' flex align-center w-auto h-10 gap-4'>
                    <p className='fixed text-center align-items text-sm text-muted-foreground'> Mac Miller </p>
                </div>
            </div>
            <div className='flex h-full w-2/5 bg-black rounded-r-sm'></div>
        </div>
    )
}

export default MediaController