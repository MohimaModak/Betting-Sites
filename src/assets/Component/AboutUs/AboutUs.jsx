import React, { useEffect } from 'react'
import "./AboutUs.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";
import whatsapp from "../../../../src/Gallery/whatsapp.png"


export default function AboutUs() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);


    return (
        <div className="aboutbg text-white py-16 px-5 lg:px-16 relative">

            <div id='/AboutUs' className='relative flex justify-center items-center gap-5'>

                <div data-aos="fade-up" className=''>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-center text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
                            I am <span className="payment">Jihan Khan</span>
                        </h1>

                        <div className="">
                            <div className='lg:flex justify-center items-center gap-5 my-8'>


                                <div className="relative bg-black/80 backdrop-blur-lg p-8 flex justify-center items-center mb-5 lg:mb-0 rounded-xl overflow-hidden border border-gray-700">

                                    <div className="absolute inset-0 rounded-xl animate-rotate-border opacity-70" style={{
                                        background: 'conic-gradient(transparent, transparent, #6b21a8, transparent)',
                                        animation: 'rotate 10s linear infinite',
                                    }}></div>


                                    <div className="relative z-10 w-full">
                                        <h1 className="payment text-xl lg:text-2xl font-semibold mb-4">সুপার এডমিন, এডমিন, ও নতুন সাইট নিতে যোগাযোগ করুন।
                                        </h1>
                                        <div className='flex justify-center items-center'>
                                        
                                            <a target='_blank' href="https://wa.me/16892857706">
                                                <button className="bg flex justify-center items-center text-white font-medium text-lg py-2.5 px-4 rounded transition">
                                                <div><img src={whatsapp} className='w-7 mr-1'/></div>   +16892857706
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative bg-black/80 backdrop-blur-lg p-8 flex justify-center items-center mb-5 lg:mb-0 rounded-xl overflow-hidden border border-gray-700">

                                    <div className="absolute inset-0 rounded-xl animate-rotate-border opacity-70" style={{
                                        background: 'conic-gradient(transparent, transparent, #6b21a8, transparent)',
                                        animation: 'rotate 10s linear infinite',
                                    }}></div>


                                    <div className="relative z-10 w-full">
                                        <h1 className="payment text-xl lg:text-2xl font-semibold mb-4">ইউজার আইডি নিতে যোগাযোগ করুন।
                                        </h1>
                                        <div className=''>
                                            <div className='flex justify-center items-center mb-4'>
                                                <div>
                                                    <a target='_blank' href="https://wa.me/16468143702">
                                                        <button className="bg flex justify-center items-center text-white font-medium text-lg py-2.5 px-4 rounded transition">
                                                        <div><img src={whatsapp} className='w-7 mr-1'/></div>
                                                            +16468143702
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <div>
                                                    <a target='_blank' href="https://wa.me/16892857706">
                                                        <button className="bg flex justify-center items-center text-white font-medium text-lg py-2.5 px-4 rounded transition">
                                                        <div><img src={whatsapp} className='w-7 mr-1'/></div>
                                                            +16892857706
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="text-gray-300 text-xl font-medium">
                                <p>
                                    Jihanbook এ স্বাগতম, এটি এশিয়ার নাম্বার 1# বিশ্বস্ত এক্সচেন্জ , যেটি B2B, B2C সাইট ডেভেলোপ করে সাথে INR, BDT, PKR পেমেন্ট গেটওয়ে প্রদান করে। এছাড়া ৩৫০+ ভেরিফাইড সাইটের এডমিন, মাস্টার এজেন্ট, সুপার এজেন্ট প্রভাইড করে। ২৪*৭ সাপোর্ট।
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

                                <Link to="/OurSiteList" smooth={true} duration={1000} className="text-xl p-4 block">
                                    <button className="bg text-white py-3 px-5 rounded-md font-medium shadow text-xl transition">
                                        Get Your User Demo ID Now
                                    </button>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


