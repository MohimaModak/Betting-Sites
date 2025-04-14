import React from 'react'
import Shop from '../Shop/Shop'
import Services from '../Services/Services'
import AdoptPet from '../AdoptPet/AdoptPet'
import Community from '../Community/Community'
import Testimonials from '../Testimonials/Testimonials'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

export default function Home() {
    return (
        <div className='py-20 px-10 text-white'>
            <div id='/' className='h-screen'>
                <h1>Home</h1>
            </div>
            <div>
                <Shop></Shop>
                <Services></Services>
                <AdoptPet></AdoptPet>
                <Community></Community>
                <Testimonials></Testimonials>
                <Blog></Blog>
                <Contact></Contact>
            </div>
        </div>
    )
}
