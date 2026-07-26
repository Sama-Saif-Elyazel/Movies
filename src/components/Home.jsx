import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tmovies from './Tmovies'
import TVs from './Tvs'

export default function Home() {
    return (
        <div className='bg-gray-900 min-h-screen text-white'>
            <Navbar />
            <Hero />
            <div className='min-h-screen py-8'>
                <Tmovies />
            </div>
            <div className='min-h-screen py-8'>
                <TVs />
            </div>
        </div>
    )
}