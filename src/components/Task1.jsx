import React from 'react'

export default function Task1() {
  return (
    <>
    <div>
        <div className='bg-cyan-200 w-full h-30'>
            <h1 className='text-black text-2xll font-bold justify-start flex items-center text-4xl p-6'>My First Website</h1>
        </div>  
        <div className='flex'>
            <div className='bg-blue-800 columns-3xs w-30% h-70 text-red-500 p-1 font-bold row-span-3'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>info</h3>
                <h3>Contact</h3>
            </div>
            <div className='bg-orange-200 w-full flex flex-col items-center justify-center p-1 font-bold row-span-3'>
                <h1>Welcome to my website</h1>
                <h1>This is the most amazing website</h1>
            </div>
        </div>    
        <div className='bg-amber-800 w-full h-20 p-1 font-bold row-span-3 justify-center items-center flex'>
                <h1>Semsema.ana2200@gmail.com</h1>
        </div>    
    </div>
    <div>
        <div>
            <img src="./assets/images/sama.jpg"/>
        </div>
    </div>
    
    </>
  )
}
