import React from "react";
import ReactDom from 'react-dom'

class Clock extends React.Component{
  render(){
    return(
      <h1>
        The Time is Now - {new Date().toLocaleTimeString()}
      </h1>
    );
  }
}

ReactDom.render(< Clock />,document.getElementById('root'));