import React from "react"
import Experience from './Experience'
import expSet from "./experiencesList.json"
export default class ExperienceList extends React.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.expList = []
        this.src = './svgs/'+ this.name
        expSet.forEach((exp) =>{
            this.expList.push(
                <>
                    <Experience key={exp.name} name={exp.name} title={exp.fullName[window.userLang]} desc={exp.desc[window.userLang]} reco={exp.reco[window.userLang]}/>
                </>
            )
        })
    }
    render(){
        return <>{this.expList}</>
    }
}