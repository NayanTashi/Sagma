import React, { useState, useEffect, useRef } from "react";


//import FailedAttemptBlock from './FailedAttempBlock';
import GameWonResults from './GameWonResults';
import GameLostResults from './GameLostResults';
import 'font-awesome/css/font-awesome.min.css';
import FailedAttemptBlock from "./FailedAttempBlock";


var data = require("../db/MOCK_DATA.json");



export default function AutoSuggestion({ audiolist }) {
  //const [value, setValue] = useState("");

  //start

  const [searchEntry, setSearchEntry] = useState("");

  const failedAttempts = useRef(0);
  const [totalAttempts, setTotalAttempts] = useState(2);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameWon, setGameWon] = useState();
  const finalScore = useRef(0);
  const gamelost = useRef(true);

  const [audioMsg, setAudioMsg] = useState("Tap on the record player");
  const audioFinalTime = useRef(1);
  const finalMins = useRef(0);
  const finalSecs = useRef(0);
  const expFactor = useRef(30);

  var recordPlayer = document.getElementById('recordPlayer');


  var playButton = document.getElementById('play');
  var pauseButton = document.getElementById('pause');
  var myVideo = document.getElementById('myVideo');








  var audLink = "";
  audLink = audiolist.link + "#t=" + audiolist.startTs + "," + audiolist.endTs;

  //const [audiolist,setAudiolist] = useState({});
  //const docref= doc(db,"audiolist",`${key}`);

  useEffect(() => {
    recordPlayer = document.getElementById('recordPlayer');


    myVideo = document.getElementById('myVideo');
    playButton = document.getElementById('play');
    pauseButton = document.getElementById('pause');
    pauseButton.style.display = 'none';
    playButton.style.display = 'none';
   


  }, []);

  //following code is commented as previewFlag is not longer needed (audioMsg is added instead)
  //   useEffect(() =>{
  // const interval = setInterval(() =>{

  //   recordPlayer.currentTime < audiolist.endTs ? previewFlag.current=true : previewFlag.current=false;
  // },3000);
  //   },[]);
  // setInterval(() => {
  //    recordPlayer.currentTime < audiolist.endTs ? previewFlag.current=true : previewFlag.current=false;
  // },3000);



  //   useEffect(() => {
  //     const getAudiolist = async () =>{

  // if(docSnap.exists()){

  //   setAudiolist({...docSnap.data()});

  // }else{


  // }

  //     }
  //     getAudiolist();
  //    },[]);

  // const [currentDate,setCurrentDate] = useState();
  // const [key, setKey] = useState("");







  function GameWon() {

    console.log('inside game won', totalAttempts)
    setGameWon(true);
    setGameEnded(true);
    gamelost.current = false;
    // expfactor introduced to put more emphasis on the audio time along with total attempts
    (Math.floor(audioFinalTime.current) - audiolist.startTs) > 30 ? expFactor.current = 300 : expFactor.current = 30;
    finalMins.current = Math.floor(((audioFinalTime.current + 1) - audiolist.startTs) / 60);
    finalSecs.current = Math.floor(((audioFinalTime.current + 1) - audiolist.startTs) % 60);
    finalScore.current = (((500 - (Math.floor(audioFinalTime.current) - audiolist.startTs)) * (totalAttempts + 1)) - expFactor.current);





    localStorage.setItem("localDay", audiolist.day);
    if (finalScore.current > localStorage.getItem("highestScore")) {
      localStorage.setItem("highestScore", finalScore.current)
    }

    localStorage.setItem("localScore", finalScore.current);
    localStorage.setItem("mins", finalMins.current);
    localStorage.setItem("secs", finalSecs.current);
    localStorage.setItem("localTotalAttempts",0);





  }

  function FailedAttempt() {
    failedAttempts.current = failedAttempts.current + 1;

  }

  function GameLost() {
    setGameWon(false);
    setGameEnded(true);
    gamelost.current = true;
localStorage.setItem("localDay", audiolist.day);
    //setting up the intial values incase of no previous data
    if (!localStorage.getItem("highestScore")) {
      
      localStorage.setItem("localScore", finalScore.current);
      localStorage.setItem("mins", finalMins.current);
      localStorage.setItem("secs", finalSecs.current);
      localStorage.setItem("highestScore", finalScore.current);
      localStorage.setItem("localTotalAttempts", 0);
    }
  }

  function handleSubmit(searchEntry) {
    //e.preventDefault();

    audioFinalTime.current = recordPlayer.currentTime;
     setTotalAttempts(totalAttempts - 1);


    audiolist.movie && (audiolist.movie.toLowerCase() === searchEntry.toLowerCase()) ? GameWon() : FailedAttempt();


    totalAttempts === 0 && gamelost.current && GameLost();

   localStorage.setItem("localTotalAttempts",totalAttempts);


    setSearchEntry("");

  };


  //end






  const onChange = (event) => {
    setSearchEntry(event.target.value);
  };

  const onSuggestionClick = (searchTerm) => {
    setSearchEntry(searchTerm);


  };

  function toggleButton() {
    if (playButton.style.display === 'none') {
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';

    } else {

      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    }
  }

  function requestMoreAudio() {


    if (totalAttempts < 1) {

      recordPlayer.play();
      setAudioMsg("Extra audio inprogress !! ");
    }
    else {
      alert("Additional audio available only after 2 failed attempts");
      setAudioMsg("Additional audio only after 2 attempts !! ");
    }
  }

  function preview() {
    recordPlayer.play();
    setAudioMsg("preview in progress")
  }

  const audioCtrl = () => {


    if (recordPlayer.paused) {
      myVideo.paused && myVideo.play();



      recordPlayer.currentTime < audiolist.endTs ? preview() : requestMoreAudio();

    } else {
      recordPlayer.pause();

      !myVideo.paused && myVideo.pause();


    }

    toggleButton();


    return false;
  }





  return (
    <>

      <div className='w-full flex flex-col ' >

        {/* eslint-disable-next-line  */}
        {/* <div className="Audio-player"> <audio src={require(`./../audio/`+`${key}`+`.mp3`)} controls />  </div> */}

        {!gameEnded && <div className='flex flex-col w-auto py-15' >


          <button id="audioControl" onClick={() => audioCtrl()}>
            {/* { <img src={require('./../Images/coverpic.png')}></img> } */}
            <video id="myVideo" src={require('./../Images/retro.mp4')} loop></video>
            <audio id="recordPlayer" src={audLink} type="audio/ogg" />


            <img className="w-6 h-6" alt="" src={require('./../Images/pause.png')} id="play" />
            <img className="w-6 h-6" alt="" src={require('./../Images/play.png')} id="pause" />
          </button>
        <p className='text-white py-3'>{audioMsg}</p>
        </div>}


        {failedAttempts.current && ((!gameEnded) && <FailedAttemptBlock totalAttempts={totalAttempts} audiolist={audiolist} />)}
        

        {!gameEnded && <div className='w-full'>
          {/* <div className='w-full text-white '>
       <span className='w-full text-red-500'> <input className='w-4/5' type="text" placeholder="enter movie name" required="required" pattern="[A-Za-z0-9]" value={searchEntry} onChange={onChange} />
        </span>  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded' onClick={() => handleSubmit(searchEntry)}> guess </button>
        </div> */}


          <div className="w-full">

            <span> <input type="text" className=" w-3/4 p-4 pl-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter movie name" pattern="[A-Za-z0-9]" value={searchEntry} onChange={onChange} required /></span>
            <span> <button type="submit" className="text-white relative  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit(searchEntry)}>Guess</button></span>
          </div>

          <div className='w-full text-white bg-black-500'>
            {data
              .filter((item) => {
                const searchTerm = searchEntry.toLowerCase();
                const fullName = item.full_name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSuggestionClick(item.full_name)}
                  className='w-4/5 bg-black font-white text-sm'
                  key={item.full_name}
                >
                  {item.full_name}
                </div>
              ))}
          </div>
        </div>}


       {gameEnded && ((gameWon) ? <GameWonResults audiolist={audiolist} /> : <GameLostResults audiolist={audiolist} />)}




      </div>
    </>


  );
}
