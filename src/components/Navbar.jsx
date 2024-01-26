import React,{useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(true);
    const handleNav=() =>{
        setNav(!nav);
    }
    return(
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4' >
            <h1 className='w-full text-3xl font-bold  text-pink-500' ><strong>SaGma</strong></h1>
            <ul className='hidden md:flex'>
            <li className='p-4'> <img className="p-1 w-14 h-14 rounded-full" alt="" src={require('./../Images/profile.jpeg')}/> </li>
      
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                
            </div>
            <div className={!nav? 'z-10 fixed left-0 top-0 w-3/6 flex-wrap h-full border-r border-r-gray-900 bg-black rounded dark:bg-gray-800 ease-in-out duration-300' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-mono font-bold text-pink-500 m-4'><strong>SaGma, also I love my wife </strong></h1>  
                <ul className='pt-18 flex-wrap uppercase '>

               
         <li>

         </li>
{/*          <li>         <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" alt="" src={require('./../Images/profile.jpeg')}/>
            <a href="https://twitter.com/CrowBastard_" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-base font-normal text-white-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg
  className="w-6 h-6 text-blue-300 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  />
</svg>
    <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
               </a>
         </li>
         <li>
            <a href="https://mstdn.social/@CrowBastard_" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cat" className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path>
  </svg>      <span className="flex-1 ml-3 whitespace-nowrap">Mastdon</span>
              
            </a>
         </li>
         <li>
            <a href="https://letterboxd.com/crowbastard_/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" ststrokelinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
            
                <span className="flex-1 ml-3 whitespace-nowrap">Letterboxd</span>
            </a>
         </li> */}
         <li>
            <a href="https://github.com/NayanTashi/SaGMa/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
             
              <span className="flex-1 ml-3 whitespace-nowrap">Github</span>
            </a>
         </li>
   
            
      



                </ul>
            </div>


     





        </div>
    )
}
export default Navbar;
