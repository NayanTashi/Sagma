
import React,{useState} from "react";

const GameCompleted = ({audiolist}) => {
  
const [showModal,setShowModal]= useState(false);
const [statsModal,setStatsModal]= useState(false);
   
function updateModel(){
  showModal ? setShowModal(false) : setShowModal(true);
}

function updateStatsModal(){
  statsModal ? setStatsModal(false) : setStatsModal(true);
}
    return (
        <>




     <div
        className="bg-pink-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        type="button"
      
      >
        That's it for the day!!!
      </div>

      <div id="alert-additional-content-2" className="p-4 mb-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-200" role="alert">
  <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-red-900 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-red-900 dark:text-red-800">You are done with today's quiz already</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
    Time remaining for the next song is available at the bottom of this page.
  </div>
  <div className="flex">
    <button type="button" onClick={() => updateModel()} className="text-white bg-blue-600 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
      <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
     {showModal ? <span>View Stats</span> : <span>View Player</span>}
    </button>
   <button type="button" onClick={() => updateStatsModal()}  className="text-blue-900 bg-transparent border border-blue-900 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
     <span> Game Info </span> 
    </button>
  </div>


</div>

{statsModal? <div id="alert-additional-content-1" className="p-4 mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300" role="alert">
  <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-blue-900">Game guidelines</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-blue-900">
   New song available every 24 hrs. 3 attempts total. Hint after 1st attempt and additional audio after 2nd attempt. Tap record player for play/pause. Score is calculated based on the audio runtime and total attempts.  </div>
  <div className="flex">
    <button type="button" onClick={() => updateStatsModal()} className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
      <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
      close
    </button>

  </div>
</div>:""}
    {showModal?  <div className="w-full h-3/4 px-6 py-6 flex-col justify-center"> 
      <p className="text-white py-3" >Enjoy the full song until then</p>
        <video className="py-2 h-full w-3/4 " src={require('./../Images/disk.mp4')} loop autoPlay />
            <audio className="h-10 w-3/4" src={audiolist.link} type="audio/mp3" controls/>
            </div> : <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5">

            {/* <div class="flex items-center justify-center">
  <div class="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" onChange={(e) => setRandomDate(e.target.value)} value={randomDate} />
    <label for="floatingInput" class="text-gray-700">Select a date</label>
    <span> <button type="submit" className="text-white relative  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handle369(randomDate)}>Guess</button></span>
     
  </div>
</div> */}

      
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
                Highest Score
            </th>
            <td className="py-4 px-6 bg-violet-500">
            {localStorage.getItem("highestScore") }
            </td>
     
        </tr>

      
    </tbody>
</table>
</div>}


      <div className="py-20">
        
        </div>      
            
          
        
       </>
    
      
    );
};

export default GameCompleted;
