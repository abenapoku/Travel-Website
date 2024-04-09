import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-yellow-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Deluxe Enterior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, excepturi!</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full'src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' alt='/'/>
            <img className='row-span-2 object-cover w-full h-full'src='https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' alt='/'/>
            <img className='object-cover w-full h-full'src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww' alt='/'/>
        </div>
    </div>
  )
}

export default Rooms