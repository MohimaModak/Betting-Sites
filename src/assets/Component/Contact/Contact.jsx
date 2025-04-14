import React from 'react'
import Marquee from 'react-fast-marquee'
import facebook from "../../../../src/Gallery/facebook.png"
import instagram from "../../../../src/Gallery/instagram.png"
import whatsapp from "../../../../src/Gallery/whatsapp.png"
import "./Contact.css"

export default function Contact() {
  return (
    <div id='/Contact' className='h-full bg-black'>
      <div className='py-12 px-4'>
        <h1 className='text-center text-4xl md:text-4xl lg:text-6xl font-bold pb-7'><span className='payment'>Payment</span> We Accept</h1>

        {/* marquee */}
        <div>
          <Marquee direction='left' speed={80} gradient={false}>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
            <h1 className='text-4xl font-bold mx-10'>Contact</h1>
          </Marquee>
        </div>

        {/* informations */}
        <div className='py-14 text-center'>
          <h1 className='text-3xl lg:text-4xl mb-4 font-light'>Get In Touch With Samir Malik Customer Care</h1>
          <h1 className='text-xl'>For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7 With Our Online Services.</h1>
          <h1 className='text-4xl font-bold py-8'><span className='payment'>For Panel ID</span> Whatsapp us on</h1>
          <h1 className='text-xl mb-4'>ইউজার অ্যাকাউন্ট নিতে এখনি যোগাযোগ করুন।</h1>
          <div className="flex justify-center items-center gap-4 mb-16">
            <a href="tel:+4571597652">
              <h1 className="bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl">+1(616) 274-3677</h1>
            </a>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold md:px-10'>আমাদের এজেন্ট লিস্ট চেক করে পড়ে লেনদেন করবেন। এজেন্ট লিস্ট এর বাহিরে লেনদেন করে প্রতারিত হলে আমাদের গ্রুপ বা এডমিন পেনেল দ্বায়ী থাকবে না।
          </h1>

          <div className='lg:flex justify-center items-center gap-10 my-8'>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold '>আমাদের অফিসিয়াল গ্রুপ এবং পেজ ভিজিট করুন।
          </h1>

          <div className='lg:flex justify-center items-center gap-10 my-8'>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a href="tel:+4571597652">
                <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
              </a>
            </div>
          </div>

          <h1 className='text-3xl lg:text-4xl mb-4 font-light'>With Our Step-By-Step Guide For Beginners</h1>
          <h1 className='text-xl mb-8'>We Provide 24/7 Service For Our Customers.</h1>
          <div className="flex justify-center items-center gap-4 mb-5 lg:mb-0">
            <a href="tel:+4571597652">
              <h1 className='bg hover:bg-black hover:text-white transform transition-all duration-300 font-bold rounded-md px-8 py-5 text-2xl md:text-3xl'>+1(616) 274-3677</h1>
            </a>
          </div>
          <div className='mt-16'>
            <div className='flex justify-center items-center gap-5'>
              <div className='flex justify-center items-center'>
                <a href="">
                  <img src={facebook} className='w-8' />
                </a>
              </div>
              <div className='flex justify-center items-center'>
                <a href="">
                  <img src={instagram} className='w-8' />
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="tel:+4571597652">
                  <img src={whatsapp} alt="Phone" className="w-8" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
