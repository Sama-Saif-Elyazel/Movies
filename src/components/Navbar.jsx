import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSpotify } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {


  return (
    <nav className='bg-[#131722] w-full h-20 flex place-content-between ' >
      <h1 className='text-4xl font-bold text-white p-4 hover:text-cyan-300'>Noxe</h1>
      <div className=' flex flex-row justify-end place-content-between gap-7 p-6 text-white '>

        <FaFacebook className='w-8 h-8 text-white hover:text-blue-900 hover:cursor-pointer' />
        <FaInstagram className='w-8 h-8 text-white hover:text-pink-500 hover:cursor-pointer' />
        <FaSpotify className='w-8 h-8 text-white hover:text-green-500 hover:cursor-pointer' />
        <FaYoutube className='w-8 h-8 text-white hover:text-red-500 hover:cursor-pointer' />


        
        <a href="/login" className='hover:text-blue-900 hover:cursor-pointer font-bold'>login</a>
        <a href="/create-account" className='hover:text-blue-900 hover:cursor-pointer font-bold'>Create Account</a>




      </div>
    </nav>
  )
}
