import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides=[
        {
            url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhc3RhfGVufDB8fDB8fHww',
            title:'Pasta',
        },
        {
            url: 'https://images.pexels.com/photos/4553378/pexels-photo-4553378.jpeg?auto=compress&cs=tinysrgb&w=600',
            title:'Lobster',
        },
        {
            url: 'https://images.unsplash.com/photo-1583953623787-ada99d338235?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RlYWslMjBkaW5uZXJ8ZW58MHx8MHx8fDA%3D',
            title:'Surf&Turf',
        },
        {
            url: 'https://images.unsplash.com/photo-1560717845-968823efbee1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9uJTIwZGlubmVyfGVufDB8fDB8fHww',
            title:'Salmon',
        },
        {
            url: 'https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnQlMjBwYXN0YXxlbnwwfHwwfHx8MA%3D%3D',
            title:'Noodles',
        },
        {
            url: 'https://images.unsplash.com/photo-1562436260-8c9216eeb703?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Sushi',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0) 

    const prevSlide =() =>{
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide =() =>{
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
        style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        <div className='flex top4 justify-center py-2 '>
            {slides.map((slide, slideIndex) =>(
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}> 
                 <RxDotFilled/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ImageSlider