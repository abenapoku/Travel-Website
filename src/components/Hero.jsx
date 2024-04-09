import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
                <p>
                    ALL INCLUSIVE
                </p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                    Private Beaches & Getaways
                </h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Excepturi dignissimos quia quibusdam facere expedita nostrum labore cumque dolores aliquid natus. Est culpa quae non ullam nisi obcaecati delectus sequi ratione?
                </p>
                <button className='bg-white text-black font-medium'>Reserve Today</button>
            </div>
        </div>
    </div>
  )
}

export default Hero