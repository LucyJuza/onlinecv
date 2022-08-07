import react from "react";
import Popup from "./ExperiencePopup";


export default class Lang extends react.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.title = props.title
        this.text = props.text
        this.desc = props.desc
        this.reco = props.reco
        this.state = {showPopup: false}
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }
    render(){
        return <div className="expEl">
            <img onClick={this.togglePopup.bind(this)} src={"./svgs/" + this.name + ".svg"} alt={this.name}/>
            {this.state.showPopup ? 
                <Popup
                title={this.title}
                text={this.text}
                desc={this.desc}
                reco={this.reco}
                closePopup={this.togglePopup.bind(this)}
                />
            :   null}
        </div>
    }
}