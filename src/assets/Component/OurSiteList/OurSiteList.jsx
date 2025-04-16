// import React, { useEffect } from 'react'
// import './OurSiteList.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const sites = [
//   { name: 'Sixfair.live', username: 'jihan99999', password: 'Asdfg1234', link: 'https://sixfair.live/' },
//   { name: 'NagadWin.com', username: 'jihan9999', password: 'Asdfg1234', link: 'https://nagadwin.com/login' },
//   { name: 'Dana36.live', username: 'jihan999999', password: 'Asdfg1234', link: 'https://dana36.live/' },
//   { name: 'Velkebdt.com', username: 'Jihan20', password: 'Asdf1234', link: 'https://velkebdt.com' },
//   { name: 'Malbet.live', username: 'Jihan21', password: 'Asdf1234', link: 'https://malbet.live' },
//   { name: 'Velki123.com', username: 'jihan99999', password: 'Abcd1234', link: 'https://velki123.com' },
//   { name: 'LC247.guru', username: 'Jihan99999', password: 'Asdf5566', link: 'https://lc247.guru' },
//   { name: 'BetX365.me', username: 'jihan99999', password: 'Asdfg1234', link: 'https://betx365.me' },
//   { name: 'LC247.ink', username: 'jihan99999', password: 'Asdfg1234', link: 'https://lc247.ink' },
//   { name: 'Baajiwalla.com', username: 'Jihan9999', password: 'Abcd1234', link: 'https://baajiwalla.com' },
//   { name: '1xBetBdt.live', username: 'Jihan9999', password: 'Lkjh0987', link: 'https://1xbetbdt.live' },
//   { name: 'NayaLodis.live', username: 'jihan99999', password: 'Asdfg1234', link: 'https://nayalodis.live/' },
//   { name: 'Lalbaji88.live', username: 'Jihan999', password: 'Asdf1234', link: 'https://lalbaji88.live/' },
//   { name: 'SkyBuzz.live', username: 'Jihan8999', password: 'Asdf1234.', link: 'https://skybuzz.live' },
// ];

// export default function OurSiteList() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       easing: 'ease-out',
//       once: true,
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => alert('Copied!'))
//       .catch((err) => console.error('Failed to copy: ', err));
//   };

//   return (
//     <div id='/OurSiteList' className='py-16 px-5 lg:px-16 relative sitelistbg'>
//       <h1 data-aos="fade-up" className="text-center text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-10">
//         Our  <span className="payment">Partners</span>
//       </h1>

//       <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
//         {sites.map((site, index) => (
//           <div data-aos="fade-up" key={index} className='gradient-border p-[2px] rounded-md'>
//             <div className='bg-black p-5 rounded-md text-center'>
//               <h1 className='payment text-4xl font-bold'>{site.name}</h1>
//               <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//               <div>
//                 <div className='flex justify-center items-center gap-5 mb-1'>
//                   <h1 className='text-lg font-semibold'>Username</h1>
//                   <h1 className='text-lg font-semibold'>Password</h1>
//                 </div>
//                 <div className='flex justify-center items-center gap-5'>
//                   <div
//                     className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
//                     onClick={() => handleCopy(site.username)}
//                   >
//                     <h1>{site.username}</h1>
//                   </div>
//                   <div
//                     className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
//                     onClick={() => handleCopy(site.password)}
//                   >
//                     <h1>{site.password}</h1>
//                   </div>
//                 </div>
//               </div>

//               <div className='mt-3'>
//                 <a href={site.link} target="_blank" rel="noopener noreferrer">
//                   <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
























































import React, { useEffect, useState } from 'react';
import './OurSiteList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../../../../src/Gallery/sixfair.png";

const sites = [
  { name: 'Sixfair.live', username: 'jihan99999', password: 'Asdfg1234', link: 'https://sixfair.live/' },
  { name: 'NagadWin.com', username: 'jihan9999', password: 'Asdfg1234', link: 'https://nagadwin.com/login' },
  { name: 'Dana36.live', username: 'jihan999999', password: 'Asdfg1234', link: 'https://dana36.live/' },
  { name: 'Velkebdt.com', username: 'Jihan20', password: 'Asdf1234', link: 'https://velkebdt.com' },
  { name: 'Malbet.live', username: 'Jihan21', password: 'Asdf1234', link: 'https://malbet.live' },
  { name: 'Velki123.com', username: 'jihan99999', password: 'Abcd1234', link: 'https://velki123.com' },
  { name: 'LC247.guru', username: 'Jihan99999', password: 'Asdf5566', link: 'https://lc247.guru' },
  { name: 'BetX365.me', username: 'jihan99999', password: 'Asdfg1234', link: 'https://betx365.me' },
  { name: 'LC247.ink', username: 'jihan99999', password: 'Asdfg1234', link: 'https://lc247.ink' },
  { name: 'Baajiwalla.com', username: 'Jihan9999', password: 'Abcd1234', link: 'https://baajiwalla.com' },
  { name: '1xBetBdt.live', username: 'Jihan9999', password: 'Lkjh0987', link: 'https://1xbetbdt.live' },
  { name: 'NayaLodis.live', username: 'jihan99999', password: 'Asdfg1234', link: 'https://nayalodis.live/' },
  { name: 'Lalbaji88.live', username: 'Jihan999', password: 'Asdf1234', link: 'https://lalbaji88.live/' },
  { name: 'SkyBuzz.live', username: 'Jihan8999', password: 'Asdf1234.', link: 'https://skybuzz.live' },
];

export default function OurSiteList() {
  const [copied, setCopied] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const handleToggle = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div id='/OurSiteList' className='py-16 px-5 lg:px-16 relative sitelistbg'>
      <h1 data-aos="fade-up" className="text-center text-white text-4xl font-bold mb-10">
        Our <span className="payment">Partners</span>
      </h1>

      {copied && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Copied!
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {sites.map((site, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className='gradient-border p-[3.5px] rounded-md cursor-pointer'
          >
            <div className='bg-black p-5 rounded-md text-center h-[250px] flex flex-col justify-center transition-all duration-300'>
              <h1 className='payment text-3xl font-bold'>{site.name}</h1>
              <div className='flex justify-center items-center'>
                <img src={logo} className='w-28 my-2.5' alt="Logo" />
              </div>

              {openCard === index ? (
                <div>
                  <div className='flex justify-center items-center gap-5 mb-1'>
                    <h1 className='text-lg font-semibold'>Username</h1>
                    <h1 className='text-lg font-semibold'>Password</h1>
                  </div>
                  <div className='flex justify-center items-center gap-5'>
                    <div
                      className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(site.username);
                      }}
                    >
                      <h1>{site.username}</h1>
                    </div>
                    <div
                      className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(site.password);
                      }}
                    >
                      <h1>{site.password}</h1>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <a href={site.link} target="_blank" rel="noopener noreferrer">
                      <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
                    </a>
                  </div>
                </div>
              ) : (
                <p className='text-gray-400 text-sm'>Click to see login details</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}









































