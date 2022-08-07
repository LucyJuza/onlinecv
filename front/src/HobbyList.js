import react from "react";
import Hobby from './Hobby'
import hobbySet from "./hobbyList.json"
export default class HobbyList extends react.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.hobbyList = []
        this.src = './svgs/'+ this.name
        hobbySet.forEach((hobby) =>{
            this.hobbyList.push(
                <>
                <Hobby key={hobby.name} name={hobby.name} title={hobby.fullName[window.userLang]} text={hobby.text[window.userLang]}/>
                </>
            )
        })
    }
    render(){
        return <>{this.hobbyList}</>
    }
}