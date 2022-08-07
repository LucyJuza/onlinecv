import './Langs.css'
import { Link } from 'react-router-dom';
import LangList from './LangList'
import strings from "./strings.json"
function Langs() {
    return (
        <div>
          <div className="langs">
                <h1>Do you speak english?</h1>
                <h2>{strings.languages[window.userLang]}</h2>
                <div className="contLangs">
                    <LangList />
                </div>
                <Link to="./aboutme">
                    <img src={"./svgs/btns/" + window.userLang + "/btnHobbies.svg"} alt="button"></img>
                </Link>
          </div>
        </div>
    );
  }
  
  export default Langs;