import React,{Component} from "react";
import moment from "moment";





class GameTimer extends Component{
  constructor(props){
    super(props);
    this.state ={

    seconds: Math.floor(moment.duration((moment.utc().add(1,'day').startOf('day')).diff(moment.utc())).asSeconds())
    }
  
  }
tick(){
  this.setState(state => ({
    seconds: state.seconds-1
   
  }));
}
  componentDidMount()
{
this.interval = setInterval(() => this.tick(),1000);

}
componentWillUnmount()
{
  clearInterval(this.interval);
}



  
render(){
  return(
  
    <div className="py-10">

<footer className="footer footer-center text-center p-0 bg-base-300 fixed bottom-0 w-full ">
  <div >
    <p className="text-white"> Next song in   <span className="text-green-400">{Math.floor((this.state.seconds/60)/60)} </span> : <span className="text-green-400"> {Math.floor(this.state.seconds/60)%60}</span>: <span className="text-green-400">{Math.floor(this.state.seconds%60)}</span> - Nayn Tashi <img className="p-1 w-8 h-8 inline" alt="" src={require('./../Images/profile.jpeg')}/></p>
  </div>
</footer>
</div>

  );
}
}

export default GameTimer;