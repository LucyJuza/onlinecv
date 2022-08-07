import react from "react";
import Skill from "./Skill";
import skillSet from "./skilllist.json" 
 
export default class SkillList extends react.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.skillList = []
        this.src = './svgs/'+ this.name
        skillSet.forEach((skill) =>{
            this.skillList.push(<div className="skillWrap"><Skill key={skill.name} name={skill.name} title={skill.fullName[window.userLang]} text={skill.text[window.userLang]}/></div>)
        })
    }
    render(){
        return <>{this.skillList}</>
    }
}