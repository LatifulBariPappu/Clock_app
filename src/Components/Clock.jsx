import React from "react";
import Button from "./Button";
class Clock extends React.Component{

    state = {date: new Date(), locale: 'bn-BD'};
   
    
    componentDidMount(){
        this.clkTimer = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clkTimer);
    }

    
    handleClick =(locale) =>{
        this.setState({
            locale
        });

    }
    tick(){
        this.setState({
            date: new Date(),
        });
    }

    
    render(){
      const {date, locale} = this.state;
      return(
        <div>
        <h1 className="heading">
            <span className="text">Current Time in Dhaka  -
                {date.toLocaleTimeString(locale)}
            </span>         
        </h1>
        <Button change={this.handleClick} locale="en-US">
            Click here
        </Button>
        </div>
      );
    }
}
export default Clock;