import './App.css';
import { Link } from 'react-router-dom';
import strings from "./strings.json"

function Intro() {
    return (
        <div className="intro">
            <h1>
            {strings.name[window.userLang]}<br/>
            {strings.dev[window.userLang]}...<br/>
            </h1>
            <Link to="/skills">
                <svg id="fleche" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="arrow" d="M200 50L150 21.1325V78.8675L200 50ZM0 55H155V45H0V55Z" fill="white"/>
                </svg>
            </Link>
        </div>
    );
  }


export default Intro;