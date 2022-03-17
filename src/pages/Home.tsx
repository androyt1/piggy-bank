import React from 'react'

const Home = () => {
  return (
    <>
    <header className='w-full h-[calc(100vh-70px)] bg-indigo-400 flex flex-col justify-center items-center px-3'>
        <h1 className=' text-2xl md:text-4xl uppercase text-center text-indigo-100'>
            Welcome to 
        </h1>
        <h1 className='text-white text-4xl md:text-6xl uppercase text-center mt-4 font-bold'>
            online Bank 
        </h1>
        <p className='text-white text-md md:text-xl text-center mt-6 w-full md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque itaque consequuntur! Veritatis eveniet ipsum iste fuga repellendus odio. Eum.</p>

        <button className='bg-indigo-900 text-indigo-50 px-10 md:px-20 py-3 md:py-4 shadow-md rounded-xl mt-20 font-semibold'>Open An Account</button>
        <div className='w-full md:w-9/10 border-double border-8 border-indigo-300 mt-20 rounded-full'></div>
    </header>
    </>
  )
}

export default Home