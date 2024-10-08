import './Contact.css'
import string from "./strings.json"
function ContactMe() {
    return (
        <div>
          <div className="contact">
                <h1>{string.contactMe[window.userLang]}</h1>
                <div className="contLink">
                    <div class="lnkEl"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucie-juzan-a3aa88210/"><img src={'./svgs/linkedin.svg'} alt="linkedin"/></a></div>
                    <div class="lnkEl"><a target="_blank" rel="noreferrer" href="https://github.com/LucyJuza"><img src={'./svgs/github.svg'} alt="github"/></a></div>
                    <div class="lnkEl"><a href="mailto:lucie@juzan.dev"><img class="mail" src={"./svgs/mail.svg"} alt="mail"/></a></div>
                    <div class="lnkEl"><a target="_blank" rel="noreferrer" href="https://fr.fiverr.com/noejuza"><img src={'./svgs/fiverr.svg'} alt="fiverr"/></a></div>
                </div>
          </div>
        </div>
    );
  }
  
  export default ContactMe;