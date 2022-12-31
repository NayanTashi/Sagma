
import React from "react";



const FailedAttemptBlock = ({totalAttempts,audiolist} ) => {
console.log('totalAttempts',totalAttempts);
    return (
<div className='py-8 w-full border-solid inline-block' >
<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded relative" role="alert">


<span className="block my-3">
            Wrong!! Attempts remaining : 
           <strong className="text-3xl text-green-500"> {totalAttempts+1}</strong>.
          </span>

{totalAttempts === 1 ?

<div id="alert-5" className="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
<svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>

<div className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
Hint:  {audiolist.hint}</div>

</div> : ""}

{totalAttempts === 0 ?

<div id="alert-5" className="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
<svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>

<div className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
More audio available now. Tap on record player!</div>

</div> : ""}



  </div>

 




</div>
    );
};

export default FailedAttemptBlock;