import react from "react";
import Popup from "./Popup";

export default class Lang extends react.Component{

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
        return <div className="langEl">
            <img onClick={this.togglePopup.bind(this)} src={"./svgs/" + this.name + ".svg"} alt={this.name}/>
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