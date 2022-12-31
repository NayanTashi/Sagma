
import React,{useState} from "react";

import {composeTweetBody} from "./SocialFeed";

const GameWonResults = ({audiolist} ) => {
    const [gameWonStatus, setGameWonStatus] = useState(true);
    const [showModal, setShowModal] =  useState(true);


   function shareTweet() {
  
   // href="https://facebook.com/sharer/sharer.php?u=";
  //  href="https://twitter.com/intent/tweet?url=&amp;text="
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(composeTweetBody()),"_blank");
        }
    return (
       <>
  
   
  <h1
        className="bg-green-600 text-white active:bg-pink-600 font-bold uppercase text-lg px-6 py-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        You got it Champ!!!
      </h1>
  
<div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5">

      
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-500 dark:text-white">
            <tr className="text-base ">
                <th scope="col" className="py-3 px-6">
                    Current Score
                </th>
                <th scope="col" className="py-3 px-6 bg-blue-500">
                    {localStorage.getItem("localScore")}
                </th>
           
            </tr>
        </thead>
        <tbody>
            <tr className="bg-rose-400 border-b border-blue-400">
                <th scope="row" className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                Time Taken 
                </th>
                <td className="py-4 px-6 bg-rose-400">
                {localStorage.getItem("mins")}m,{localStorage.getItem("secs")}secs
                
                </td>
         
            </tr>

            <tr className="bg-violet-500 border-b border-blue-400">
                <th scope="row" className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Your Highest Score
                </th>
                <td className="py-4 px-6 bg-violet-500">
                {localStorage.getItem("highestScore") }
                </td>
         
            </tr>

            <tr className="bg-violet-500 border-b border-blue-400">
                <th scope="row" className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Max possible score
                </th>
                <td className="py-4 px-6 bg-violet-500">
               1500
                </td>
         
            </tr>

          
        </tbody>
    </table>
</div>
 <div className="sharing-buttons place-content-center">
 {/* <button className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700" onClick={() => shareTweet()}  aria-label="Share on Facebook">
    <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
      <title>Facebook</title>
      <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z">
      </path>
    </svg>
  </button> */}

  {/* <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 " onClick={() => shareTweet()}>
  <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
  Share on Facebook
</button> */}
<button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2" onClick={() => shareTweet()}>
  <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
  Share on Twitter
</button>

<div className="w-full h-3/4 px-6 py-6 flex-col justify-center"> 
      <p className="text-white space-y-5 py-3" >enjoy the full song</p>
        <video className="py-4 w-3/4 " src={require('./../Images/disk.mp4')} loop autoPlay />
            <audio src={audiolist.link} type="audio/mp3" controls/>
            </div>

  </div>

       </>
    );
};

export default GameWonResults;
