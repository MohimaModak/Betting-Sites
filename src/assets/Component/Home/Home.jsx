import React from 'react'
import Contact from '../Contact/Contact'
import herobg from "../../../../src/Gallery/herobg.jpeg"
import HeroLogo from "../../../../src/Gallery/HeroLogo.png"
import Card1 from "../../../../src/Gallery/Card1.png"
import Card2 from "../../../../src/Gallery/Card2.png"
import Card3 from "../../../../src/Gallery/Card3.png"
import Card4 from "../../../../src/Gallery/Card4.png"
import Card5 from "../../../../src/Gallery/Card5.png"
import Card6 from "../../../../src/Gallery/Card6.png"
import Card8 from "../../../../src/Gallery/Card8.png"
import "./Home.css"
import Marquee from 'react-fast-marquee'
import Why from '../Why/Why'
import OurSiteList from '../OurSiteList/OurSiteList'
import AboutUs from '../AboutUs/AboutUs'

export default function Home() {
    return (
        <div className='text-white'>
            <div id='/' className='h-screen'>
                <div className="">
                    <div className="relative wrapper">
                        <div className="box">
                            <img src={herobg} className='opacity-25 object-cover w-full h-full' />
                           
                            <div><img src={Card1}/></div>
                            <div><img src={Card2}/></div>
                            <div><img src={Card3}/></div>
                            <div><img src={Card6}/></div>
                            <div><img src={Card5}/></div>
                            <div><img src={Card6}/></div>
                            <div><img src={Card4}/></div>
                            <div><img src={Card8}/></div>
                            <div><img src={Card6}/></div>
                            <div><img src={Card1}/></div>
                            <div><img src={Card2}/></div>
                            <div><img src={Card3}/></div>
                            <div><img src={Card6}/></div>
                            
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
                                        <img src={HeroLogo} className='w-80 h-80 rounded-full' />
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
                <AboutUs></AboutUs>
                <OurSiteList></OurSiteList>
                <Why></Why>
                <Contact></Contact>
            </div>
        </div>
    )
}
