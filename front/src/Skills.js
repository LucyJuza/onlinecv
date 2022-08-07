import './Skills.css';
import Par from "./Par";
import SkillList from './SkillList'
import {Link} from 'react-router-dom';
import strings from "./strings.json"

function Skills() {
  return (
      <div>
        <Par/>
        <div className="skills">
            <h1>{strings.andMuchMore[window.userLang]}</h1>
            <h2>{strings.skillsTitle[window.userLang]}</h2>
            <div className="contComp">
                <SkillList />
            </div>
            <Link to="./langs">
              <img src={"./svgs/btns/" + window.userLang + "/btnLangs.svg"} alt="button"></img>
            </Link>
        </div>
      </div>
  );
}

export default Skills;
