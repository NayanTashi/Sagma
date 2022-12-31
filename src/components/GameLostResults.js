
import React,{useState} from "react";






const GameLostResults = ({audiolist} ) => {

const [showModal,setShowModal]= useState(true);
   


   
    return (
        <>
     
     <button
        className="bg-pink-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Better Luck Next Time!!!
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-3 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                {/*body*/}
                        <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 mr-2 text-red-900 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-red-900 dark:text-red-800">Mission failed!!! Try again tomorrow!</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
    Time remaining for the next song is available at the bottom of this page.
  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b">
                  <p className="text-black font-mono"> Edhoka roju correct ga guess chestharu babu, chestharu!</p>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
            
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) :  <div className="w-full h-3/4 px-6 flex-col justify-center"> 
      <p className="text-white space-y-5 py-3" >enjoy the full song</p>
        <video className="py-5 w-3/4 " src={require('./../Images/disk.mp4')} loop autoPlay />
            <audio src={audiolist.link} type="audio/ogg" controls/>
            </div>}

        
       </>
    
      
    );
};

export default GameLostResults;
