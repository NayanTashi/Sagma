
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
                <div className="relative p-3 flex-auto bg-black">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed">
                <img className="w-full h-3/4" src={require('./../Images/nexttime.gif')} />
      
                  </p>
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
