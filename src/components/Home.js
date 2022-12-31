import React, { useEffect, useState } from "react";


import {  doc, getDoc } from "firebase/firestore";


import { db } from './../firebase-config';

import GameTimer from "./GameTimer";
import AutoSuggestion from "./AutoSuggestion";


import GameCompleted from "./GameCompleted";



const Home = () => {

  
  const [audiolist, setAudiolist] = useState({});
  let currentDate = new Date();


  let key = currentDate.toISOString().split('T')[0];



  useEffect(() => {
    ; (async () => {
      const docref = doc(db, "audiolist", key);
      const docSnap = await getDoc(docref);
  
      setAudiolist(docSnap.data());


    })()

  }, [key]);

  return (

    <div className='max-w-[800px] mt-[-960] w-full min-h-screen h-screen mx-auto flex flex-col'>
    {/* audio player to be displayed only after we fetch data successfully */}

      {audiolist.day ?


        (localStorage.getItem("localDay") !== audiolist.day ?

          <div className='max-w-[800px] mt-[-960] w-full min-h-screen h-screen mx-auto flex flex-col'>

            {audiolist.movie && (<AutoSuggestion audiolist={audiolist} />)}
            {!audiolist.movie && <div className='text-white'>  Loading, pls wait </div>}




          </div> : <GameCompleted audiolist={audiolist} />) : <div className="text-white">loading pls wait</div>}

      <GameTimer />
    </div>
  );
};
export default Home;