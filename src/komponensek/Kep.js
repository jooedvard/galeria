import React from "react";
import './kep.css';

class Kep extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.id;
        
    }

    kattintas=()=>{
        this.props.nagyit(this.props.id);
     
    }

    render(){
        return <div className="kep" onClick={this.kattintas}><img className={"kep"+this.props.id+" a"} src={this.props.kep} alt={this.props.alt}></img></div> 
    }
}

export default Kep;