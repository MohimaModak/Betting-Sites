// import React from 'react'
// import './OurSiteList.css'

// export default function OurSiteList() {

//   const handleCopy = () => {
//     navigator.clipboard.writeText('jihan99999')
//       .then(() => {
//         alert('copied!');
//       })
//       .catch((err) => {
//         console.error('Failed to copy: ', err);
//       });
//   };

//   return (
//     <div id='/OurSiteList' className='p-16 sitelistbg'>
//       <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>Sixfair.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan99999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>
//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>NagadWin.com</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan9999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>Dana36.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan999999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>VelkeBDt.com</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan20</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdf1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>Malbet.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan21</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdf1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>lc247.guru</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan99999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdf5566</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>BetX365</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan99999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>
//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>lc247.ink</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan99999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>BaajiWalla.com</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan9999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Abcd1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>


//           </div>
//         </div>


//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>1xbetbdt.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan9999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Lkjh0987</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>


//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>Nayalodis.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>jihan99999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdfg1234</h1>
//                 </div>
//               </div>
//             </div>
//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>lalbaji88.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdf1234</h1>
//                 </div>
//               </div>
//             </div>

//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>

//         <div className='gradient-border p-[2px] rounded-md'>
//           <div className='bg-black p-5 rounded-md  text-center'>
//             <h1 className='payment text-4xl font-bold'>Skybuzz.live</h1>
//             <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

//             <div >
//               <div className='flex justify-center items-center gap-5 mb-1'>
//                 <h1 className='text-lg font-semibold'>Username</h1>
//                 <h1 className='text-lg font-semibold'>Password</h1>
//               </div>
//               <div className='flex justify-center items-center gap-5'>
//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Jihan8999</h1>
//                 </div>

//                 <div className='btn px-2.5 py-1.5 text-lg rounded-sm' onClick={handleCopy} style={{ cursor: 'pointer' }}>
//                   <h1>Asdf1234</h1>
//                 </div>
//               </div>
//             </div>
//             {/* website link */}
//             <div className='mt-3'>
//               <a href="">
//                 <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
//               </a>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }



































import React from 'react';
import './OurSiteList.css';

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
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied!'))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div id='/OurSiteList' className='py-16 px-5 lg:px-16 relative sitelistbg'>
      <h1 className="text-center text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-10">
        Our  <span className="payment">Partners</span>
      </h1>

      <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {sites.map((site, index) => (
          <div key={index} className='gradient-border p-[2px] rounded-md'>
            <div className='bg-black p-5 rounded-md text-center'>
              <h1 className='payment text-4xl font-bold'>{site.name}</h1>
              <h1 className='text-2xl font-semibold my-1'>Demo ID</h1>

              <div>
                <div className='flex justify-center items-center gap-5 mb-1'>
                  <h1 className='text-lg font-semibold'>Username</h1>
                  <h1 className='text-lg font-semibold'>Password</h1>
                </div>
                <div className='flex justify-center items-center gap-5'>
                  <div
                    className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
                    onClick={() => handleCopy(site.username)}
                  >
                    <h1>{site.username}</h1>
                  </div>
                  <div
                    className='btn px-2.5 py-1.5 text-lg rounded-sm cursor-pointer'
                    onClick={() => handleCopy(site.password)}
                  >
                    <h1>{site.password}</h1>
                  </div>
                </div>
              </div>

              <div className='mt-3'>
                <a href={site.link} target="_blank" rel="noopener noreferrer">
                  <button className='btn px-2.5 py-1.5 text-lg rounded-sm'>Visit Website</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
