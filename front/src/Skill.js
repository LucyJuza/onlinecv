import React from "react";
import Popup from "./Popup";

export default class Skill extends React.Component{
    constructor(props){
        super(props)
        this.name = props.name
        this.title = props.title
        this.text = props.text

        this.src = './svgs/'+ this.name
        this.state = {showPopup: false}
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }
    render(){
        return <div className="compEl">
            <img onClick={this.togglePopup.bind(this)} key={this.name} src={"./svgs/" +this.name + ".svg"} alt={this.name} />
            {this.state.showPopup ? 
                <Popup
                title={this.title}
                text={this.text}
                closePopup={this.togglePopup.bind(this)}
                />
            :   null}

            </div>
    }
}