import './tailwind.css';
// import { useState } from 'react';

const Coba = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [isAtmBcaOpen, setIsAtmBcaOpen] = useState(false);
    // const [isKlikBcaOpen, setIsKlikBcaOpen] = useState(false);
    // const [isMBCAOpen, setIsMBCAOpen] = useState(false);
  
    // const handleDropdownToggle = () => {
    //   setIsOpen(!isOpen);
    //   setIsAtmBcaOpen(false);
    //   setIsKlikBcaOpen(false);
    //   setIsMBCAOpen(false);
    // };
  
    // const handleAtmBcaToggle = () => {
    //   setIsAtmBcaOpen(!isAtmBcaOpen);
    //   setIsKlikBcaOpen(false);
    //   setIsMBCAOpen(false);
    // };
  
    // const handleKlikBcaToggle = () => {
    //   setIsKlikBcaOpen(!isKlikBcaOpen);
    //   setIsAtmBcaOpen(false);
    //   setIsMBCAOpen(false);
    // };
  
    // const handleMBCAToggle = () => {
    //   setIsMBCAOpen(!isMBCAOpen);
    //   setIsAtmBcaOpen(false);
    //   setIsKlikBcaOpen(false);
    // };
  
    return (

    // <div className="flex justify-center items-center">
    //   <div className="bg-blue-600 w-[332px] h-[462px] mt-10 rounded-lg">
    //     <div className="bg-blue-500 w-[332px] h-24">
    //       <h1 className="text-black font-semibold ml-8 pt-5 text-xl">Nusa Lms</h1>
    //       <div className="flex justify-center items-center mt-[14px]">
    //         <div className="bg-orange-400 w-[250px] h-[73px] rounded-lg">
    //           <div className="flex">
    //             <h1 className="pt-1 pl-2 font-bold text-sm">Total</h1>
    //             <h1 className="pt-1 pl-[70px] text-xs font-medium">Choose within 23:59:59</h1>
    //           </div>
    //           <h1 className="pl-2 font-bold text-lg">Rp 100,000</h1>
    //           <h1 className="pb-3 pl-2 text-xs font-medium">Order ID #wWwTsA</h1>
    //         </div>
    //       </div>

    //       <h1 className="font-bold pl-3 text-sm pt-3">Bank BCA</h1>
    //       <p className="pl-3 text-xs font-normal w-64">Complete Payment from BCA to the virtual account
    //         number below</p>
    //       <p className="mt-2 pl-3 text-xs font-medium">Virtual Account Number</p>
    //       <div className="flex justify-between">
    //         <p className="pl-3 text-xs">78987898789</p>
    //         <p className="pr-4 text-xs">Copy</p>
    //       </div>

    //       <div className="border-b border-gray-300 pb-1"></div>
    //       <div className="flex justify-between">
    //         <h1 className="font-bold pl-3 text-xs pt-2">How to Play</h1>
    //         <div className="pr-4">
    //           <button onClick={handleDropdownToggle}>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    //               stroke="currentColor"
    //               className={`w-6 h-6 pt-2 ${isOpen ? 'rotate-180' : ''}`}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       {isOpen && (
    //         <>
    //           <div className="h-full overflow-y-scroll overflow-custom">
    //             <div className="border-b border-gray-300 pb-1"></div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold pl-3 text-xs pt-2">ATM BCA</h1>
    //               <div className="pr-4">
    //                 <button onClick={handleAtmBcaToggle}>
    //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    //                     stroke="currentColor"
    //                     className={`w-6 h-6 pt-2 ${isAtmBcaOpen ? 'rotate-180' : ''}`}>
    //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>
    //             {isAtmBcaOpen && (
    //               <div className="ml-4">
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //                 <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
    //               </div>
    //             )}

    //             <div className="border-b border-gray-300 pb-1"></div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold pl-3 text-xs pt-2">Klik BCA</h1>
    //               <div className="pr-4">
    //               <button onClick={handleKlikBcaToggle}>
    //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    //                     stroke="currentColor"
    //                     className={`w-6 h-6 pt-2 ${isKlikBcaOpen ? 'rotate-180' : ''}`}>
    //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>
    //             {isKlikBcaOpen  && (
    //               <div className="ml-4">
    //                 <p className="text-xs font-medium w-64">1. Select</p>
    //               </div>
    //             )}

    //             <div className="border-b border-gray-300 pb-1"></div>
    //             <div className="flex justify-between">
    //               <h1 className="font-bold pl-3 text-xs pt-2">m-BCA</h1>
    //               <div className="pr-4">
    //               <button onClick={handleMBCAToggle}>
    //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    //                     stroke="currentColor"
                       
    //                           className={`w-6 h-6 pt-2 ${isMBCAOpen ? 'rotate-180' : ''}`}>
    //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>
    //             {isMBCAOpen && (
    //               <div className="ml-4">
    //                 <p className="text-xs font-medium w-64">1. m-BCA</p>
    //               </div>
    //             )}

    //           </div>
    //         </>
    //       )}
    //       <div className="border-b border-gray-300 pb-1"></div>
    //       <div className="flex justify-center items-center mt-3">
    //         <div className="bg-slate-500 w-[240px] py-1">
    //           <p className="font-bold text-sm text-center">Back to Merchant</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  //   <div className="h-screen flex items-center justify-center">
  //   <div className="w-96 h-20 p-4 overflow-y-scroll overflow-custom border border-gray-300">
      // <p>
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      // loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      //   </p>
  //     {/* {Array.from({ length: 20 }, (_, index) => (
  //       <div key={index} className="mb-4 p-2 border rounded">
  //         Item {index + 1}
  //       </div>
  //     ))} */}
  //   </div>
  // </div>

  <div className="h-screen  items-center justify-center">
  <div className="w-96 p-4 border border-gray-300">
    <div
      className="h-20 overflow-y-scroll overflow-custom border border-gray-300"
      // style={{ direction: 'rtl' }}
    >
      <p className="">
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      loremvvwjkhjkaehjsdhjkqhkjqdhjkHDKHADJXKHDXJKAHDjJKHJAJJHAJKWHSJK
      </p>
    </div>
  </div>
</div>

  );
};

export default Coba;


