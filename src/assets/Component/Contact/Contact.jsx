import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import facebook from "../../../../src/Gallery/facebook.png"
import whatsapp from "../../../../src/Gallery/whatsapp.png"
import astha from "../../../../src/Gallery/astha.png"
import bksh from "../../../../src/Gallery/bksh.png"
import nogod from "../../../../src/Gallery/nogod.png"
import rocket from "../../../../src/Gallery/rocket.png"
import T from "../../../../src/Gallery/T.png"
import upay from "../../../../src/Gallery/upay.png"
import wallet from "../../../../src/Gallery/wallet.png"
import dutch from "../../../../src/Gallery/dutch.jpeg"
import "./Contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {

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
    <div id='/Contact' className='h-full contactbg'>
      <div data-aos="fade-up" className='py-12 px-4'>
        <h1 className='text-center text-4xl md:text-4xl lg:text-6xl font-bold pb-7'><span className='payment'>Payment</span> We Accept</h1>

        {/* marquee */}
        <div>
          <Marquee direction='left' speed={100} gradient={false}>
            <h1><img src={astha} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={bksh} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={nogod} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={rocket} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={T} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={upay} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={wallet} className='w-16 lg:w-32 mr-4'/></h1>
            <h1><img src={dutch} className='w-16 lg:w-32 mr-4'/></h1>
          </Marquee>
        </div>

        {/* informations */}
        <div className='py-14 text-center'>
          <h1 className='text-3xl lg:text-4xl mb-4 font-light'>Get In Touch With Jihan Khan Customer Care</h1>
          <h1 className='text-xl'>For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.</h1>
          <h1 className='text-4xl font-bold py-8'><span className='payment'>For Panel ID</span> Whatsapp us on</h1>
          <h1 className='text-xl mb-4'>ইউজার অ্যাকাউন্ট নিতে এখনি যোগাযোগ করুন।</h1>
          <div className="flex justify-center items-center gap-4 mb-16">
            <a target='_blank' href="https://wa.me/16892857706">
              <h1 className="bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl">+16892857706</h1>
            </a>
          </div>

          <h1 className='text-2xl md:text-3xl font-medium md:px-10'>আমাদের এজেন্ট লিস্ট চেক করে পড়ে লেনদেন করবেন। এজেন্ট লিস্ট এর বাহিরে লেনদেন করে প্রতারিত হলে আমাদের গ্রুপ বা এডমিন পেনেল দ্বায়ী থাকবে না।
          </h1>

          <div className='lg:flex justify-center items-center gap-10 my-8'>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a target='_blank' href="https://www.facebook.com/DigitalZetofficial">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Digitalzet Page</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a target='_blank' href=" https://www.facebook.com/profile.php?id=61564665096254">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>SiXfair Page</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a target='_blank' href=" https://www.facebook.com/Nagadwi">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Nagadwin Page</h1>
              </a>
            </div>
          </div>

          <h1 className='text-2xl md:text-3xl font-medium'>আমাদের অফিসিয়াল গ্রুপ এবং পেজ ভিজিট করুন।
          </h1>

          <div className='lg:flex justify-center items-center gap-10 my-8'>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a target='_blank' href="https://www.facebook.com/groups/828211297830627">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Betting Tips Group</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a target='_blank' href="https://www.facebook.com/groups/203559938036469">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Bety247 Group</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a target='_blank' href="https://www.facebook.com/Jihankhan365/">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Contact Me on Facebook</h1>
              </a>
            </div>
          </div>

          <h1 className='text-3xl lg:text-4xl mb-4 font-light'>With Our Step-By-Step Guide For Beginners</h1>
          <h1 className='text-xl mb-8'>We Provide 24/7 Service For Our Customers.</h1>
          <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
            <a href="/">
              <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-medium rounded-md px-6 py-4 text-2xl'>Get Started Playing</h1>
            </a>
          </div>

          <div className='my-10'>
          <div className='flex justify-center items-center gap-5'>
              <div className='flex justify-center items-center'>
                <a target='_blank' href="https://www.facebook.com/DigitalZetofficial">
                  <img src={facebook} className='w-8' />
                </a>
              </div>
             
              <div className="flex justify-center items-center">
                <a target='_blank' href="https://wa.me/16892857706">
                  <img src={whatsapp} alt="Phone" className="w-8" />
                </a>
              </div>
            </div>
          </div>

          <div className=''>
          <h1 className='text-xl'>
            Powered by <a href="https://digitalzet.com"><strong className='payment underline'>Digitalzet</strong></a>
            </h1>
          </div>

        </div>
      </div>
    </div>
  )
}
