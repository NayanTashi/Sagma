
import React from "react";


const SocialFeed = ( ) => {
   // const [movieName, setMovieName] = useState("");
    
  // audiolist.day,localStorage.getItem("localScore"),localStorage.getItem("highestScore"),localStorage.getItem("mins"),localStorage.getItem("secs")
    return (
      <></>
      
    );
};


export const AppUri = "https://sagma.netlify.app/";
   export const composeTweetBody = () =>{

      return (localStorage.getItem("localScore") > 1000 ? `SaGMa Day ${localStorage.getItem("localDay")} \n\n SCORE(/1500): ${localStorage.getItem("localScore")} 🏆🏆🏆 \n\n Time Taken: ${localStorage.getItem("mins")}m,${localStorage.getItem("secs")}secs\n\n\n ${AppUri}\n ` : `SaGma Day ${localStorage.getItem("localDay")} \n\n SCORE(/1500): ${localStorage.getItem("localScore")} 🦆 \n\n Time Taken: ${localStorage.getItem("mins")}m,${localStorage.getItem("secs")}secs\n\n\n${AppUri}\n  `);

}

export default SocialFeed;
