import './About.css';
import { Link } from 'react-router-dom';
import HobbyList from './HobbyList';
import strings from "./strings.json"
function AboutMe() {
  return (
      <div>
        <div className="about">
            <h1>{strings.hobbiesTitle[window.userLang]}</h1>
            <h2>{strings.hobbiesSubTitle[window.userLang]}</h2>
            <div className="contHob">
                <HobbyList />
            </div>
            <Link to="./experiences">
              <img src={"./svgs/btns/" + window.userLang + "/btnExperiences.svg"} alt="button"></img>
            </Link>
        </div>
      </div>
  );
}

export default AboutMe;
