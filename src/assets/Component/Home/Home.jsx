import React from 'react'
import Contact from '../Contact/Contact'
import herobg from "../../../../src/Gallery/herobg.jpeg"
import "./Home.css"
import Marquee from 'react-fast-marquee'
import Why from '../Why/Why'

export default function Home() {
    return (
        <div className='text-white'>
            <div id='/' className='h-screen'>
                <div className="">
                    <div className="relative wrapper">
                        <div className="box">
                            <img src={herobg} className='opacity-25 object-cover w-full h-full' />
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='absolute inset-0 flex justify-center items-center px-3'>
                        <div>
                            <div className=''>
                                <div data-aos="fade-up">

                                    <h1 className='header text-5xl md:text-8xl font-semibold text-center textShadow px-5'>SAMIR <span className='text-white'>MALIK</span> 
                                    </h1>
                                    <h1 className='text-center text-2xl font-medium py-4'>GET YOUR ONLINE BETTING SITE PANEL</h1>
                                    <div className='flex justify-center items-center mb-12'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZB1b6rfq8kiI0s_oA6AvusMSGQUsMaI4WQ&s" className='w-80 h-80 rounded-full' />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='marqueebg p-2.5'>
                                    <Marquee direction='left' speed={80} gradient={false}>
                                        <h1 className='text-2xl font-bold'>Welcome to Samir Malik All Site List. Full Premium Site For Casino & Sports Lovers. Motherpanel, Whitepanel, Super Admin & Admin Panel Provider. Contact on Whatsapp for Business. Thanks from Samir Malik.
                                        </h1>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Why></Why>
                <Contact></Contact>
            </div>
        </div>
    )
}
