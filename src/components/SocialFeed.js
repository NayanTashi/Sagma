
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

      return (localStorage.getItem("localScore") > 1000 ? `SaGMa Day ${localStorage.getItem("localDay")} : ${localStorage.getItem("mins")}m,${localStorage.getItem("secs")}secs - ${localStorage.getItem("localScore")}  🏆🏆   \n ${AppUri} ` : `SaGMa Day ${localStorage.getItem("localDay")} : ${localStorage.getItem("mins")}m,${localStorage.getItem("secs")}secs - ${localStorage.getItem("localScore")}  🏆   \n ${AppUri} `);

}

export default SocialFeed;
