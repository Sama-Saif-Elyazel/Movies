import React from 'react'

export default function Login() {
    return (
        <>
            <img src="./assets/images/hero.jpeg" className="w-full h-screen object-cover relative z-0 opacity-90" />
            <div className=' h-screen w-full flex items-center justify-center absolute inset-0 z-10'>
                <div className='bg-[#1a202e] opacity-80 p-10 rounded-3xl w-96'>
                    <h1 className='text-white text-3xl font-bold mb-5'>Login</h1>

                    <div className='mb-4'>
                        <label className='block text-gray-400 mb-2'>Email</label>
                        <input type="email" className='w-full p-3 bg-[#2c3448] rounded-lg text-white' placeholder="Enter your email" />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-400 mb-2'>Password</label>
                        <input type="password" className='w-full p-3 bg-[#2c3448] rounded-lg text-white' placeholder="Enter your password" />
                    </div>
                    <button type="submit" className='w-full bg-sky-900 hover:bg-sky-800 text-white py-3 rounded-lg font-bold text-2xl'>Login</button>


                    <a href="/create-account" className='gap-4 text-white text-center block mt-3'>Don't have an account?</a>
                    <a href="/" className='gap-8 text-white text-center block mt-3'>Back To Home</a>

                </div>
            </div>
        </>
    )
}
