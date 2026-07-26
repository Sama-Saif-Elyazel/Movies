import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='bg-[#131722] w-full min-h-[5rem] px-4 md:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4'>
      <Link to="/" className='text-3xl sm:text-4xl font-bold text-white hover:text-cyan-300 transition-colors'>
        Noxe
      </Link>
      
      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white'>
        <div className='flex items-center gap-3 border-r border-gray-700 pr-4'>
          <FaFacebook className='w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-blue-500 cursor-pointer transition-colors' />
          <FaInstagram className='w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-pink-500 cursor-pointer transition-colors' />
          <FaSpotify className='w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-green-500 cursor-pointer transition-colors' />
          <FaYoutube className='w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-red-500 cursor-pointer transition-colors' />
        </div>

        <div className='flex items-center gap-4 text-sm sm:text-base'>
          <Link to="/login" className='hover:text-cyan-300 font-bold transition-colors'>
            Login
          </Link>
          <Link to="/create-account" className='bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg font-bold transition-colors'>
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  )
}