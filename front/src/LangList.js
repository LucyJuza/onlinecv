import react from "react";
import Lang from "./Lang";

const langSet = [
    {"name":"french",
    "fullName":"Français",
    "text":"Ma langue natale est le français, c'est avec celle-ci que j'ai été elevée et avec laquelle j'ai suivi mon cursus scolaire."},
    {"name":"english",
    "fullName":"Anglais",
    "text":"I am fluent in English as well, allowing me to actively collaborate with native English speakers, as well as the quick reading of English texts and documentations which is a huge help in the programming and IT world."},
    {"name":"german",
    "fullName":"Allemand",
    "text":"Ich habe die Berufsmatura in Deutsch (B2-Äquivalent) absolviert und kann mich mündlich verständigen, auch wenn dies im Falle von Schweizerdeutsch und anderen Dialekten problematisch ist, da es sich nicht mehr um dieselbe Sprache handelt."}]

export default class LangList extends react.Component{

    constructor(props){
        super(props)
        this.name = props.name
        this.langList = []
        langSet.forEach((lang) =>{
            this.langList.push(<Lang name={lang.name} title={lang.fullName} text={lang.text}/>)
        })
    }
    render(){
        return <>{this.langList}</>
    }
}