import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tmovies from './Tmovies'
import TVs from './Tvs'

export default function Home() {
    return (
        <>
            <div>
                <div className='h-screen'>
                    <Navbar />
                    <Hero />
                </div>
                <div className='h-screen'>
                    <Tmovies />
                </div>
                <div className='h-screen'>
                    <TVs />
                </div>
            </div>
        </>
    )
}
