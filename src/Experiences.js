import './Experiences.css'
import { Link } from 'react-router-dom';
import ExperienceList from './ExperienceList';
import strings from "./strings.json"
function Experiences() {
    return (
        <div>
          <div className="experiences">
                <h1>{strings.ExperiencesTitle[window.userLang]}</h1>
                <h2>{strings.ExperiencesSubtitle[window.userLang]}</h2>
                <div className="contExp">
                    <ExperienceList />
                </div>
                <Link to="./contactme">
                    <img src={"./svgs/btns/" + window.userLang + "/btnContact.svg"} alt="button"></img>
                </Link>
          </div>
        </div>
    );
  }
  
  export default Experiences;