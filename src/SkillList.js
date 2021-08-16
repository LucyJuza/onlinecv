import react from "react";
import Skill from "./Skill";
const images = require.context('./svgs',true)
const skillSet = [
    {"name":"html",
    "fullName":"HTML",
    "text":"Je suis capable de réaliser le \"corps\" et l'architecture d'un site web avec la technologie HTML (Maîtrise du DOM et des balises)."},
    {"name":"css",
    "fullName":"CSS",
    "text":"Je suis capable d'ajouter des éléments de design à une page web au travers de la technologie CSS, Je suis aussi capable de concevoir un site de sorte qu’il soit \"responsive\" (adaptatif) sur tous les supports (PC, mobile, tablette)"},
    {"name":"js",
    "fullName":"JavaScript",
    "text":"Je suis capable d'ajouter des éléments de dynamisme à une page web au travers de la technologie JavaScript. Je suis aussi capable d'implémenter les frameworks et librairies communes du web (ce site est d'ailleurs réalisé avec ReactJS). (Front End)"},
    {"name":"nodejs",
    "fullName":"Node.js",
    "text":"Je suis capable de créer des serveurs web et des API ainsi que servir du contenu avec la technologie Node.js. (Back end)"},
    {"name":"docker",
    "fullName":"Docker / Conteneurs",
    "text":"Je suis capable d'utiliser l'utilitaire Docker pour créer des conteneurs de mes applications ou adapter des applications ou des solutions existantes en version conteneurisée. Je suis aussi capable d'orchestrer l'inter-connectivité de ces conteneurs ensemble (docker-compose)."},
    {"name":"nodered",
    "fullName":"Node-RED",
    "text":"Je suis capable de créer des \"Flows\" de traitement avec Node-RED. Je suis aussi capable de créer des tableaux de bord avec des formulaires interactifs."},
    {"name":"linux",
    "fullName":"Administration Linux",
    "text":"Je suis capable de réaliser des tâches d'administration sur des environnements Linux (plus familier avec les distributions type \"Debian\"). Je suis aussi capable d'installer des distributions sur du matériel informatique."},
    {"name":"mongo",
    "fullName":"MongoDB",
    "text":"Je suis capable de mettre en place et d'intéragir avec une base de données MongoDB."},
    {"name":"nutanix",
    "fullName":"Nutanix",
    "text":"Je suis capable de mettre en place et d'administrer un ou plusieurs clusters Nutanix AOS."},
    {"name":"sql",
    "fullName":"SQL",
    "text":"Je suis capable de réaliser des requêtes sur une base de données grâce à SQL."},
    {"name":"git",
    "fullName":"Git",
    "text":"Je suis capable de collaborer avec d'autres dévelopeurs grâce à Git, GitHub et GitLAB."},
    {"name":"rest",
    "fullName":"API REST",
    "text":"Je suis capable de créer et d'utiliser des API de type REST avec les différentes méthodes HTTP standards (GET, POST, DELETE, etc...)."}]
export default class SkillList extends react.Component{
    loadImage = imageName => (images(`./${imageName}`).default)

    constructor(props){
        super(props)
        this.name = props.name
        this.skillList = []
        this.src = './svgs/'+ this.name
        skillSet.forEach((skill) =>{
            this.skillList.push(<Skill name={skill.name} title={skill.fullName} text={skill.text}/>)
        })
    }
    render(){
        return <>{this.skillList}</>
    }
}