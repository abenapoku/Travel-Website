import React from 'react'

const Plan = () => {
  return (
    <div id='plan' className='max-w-[1400] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        <img className='row-span-2 object-cover w-full h-full p-2'src='https://images.unsplash.com/photo-1618396755206-ff25b5737b8a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D' alt='/'/>
        <img className='row-span-2 object-cover w-full h-full p-2'src='https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMHJlc29ydCUyMHJvb218ZW58MHx8MHx8fDA%3D' alt='/'/>
        <img className='row-span-3 object-cover w-full h-full p-2'src='https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        <img className='row-span-2 object-cover w-full h-full p-2'src='https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
    </div>

    <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
       <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corrupti error magnam, mollitia tempora ex voluptas alias placeat! Eos, debitis.</p>
       <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis odio magni velit accusantium? Recusandae dolores praesentium architecto voluptas. Dolorem, voluptatum adipisci. Numquam culpa officia maxime tempore asperiores voluptatum id.</p>
    <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
    </div>
    </div>
    </div>
  )
}

export default Plan