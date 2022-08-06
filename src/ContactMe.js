import './Contact.css'
import string from "./strings.json"
function ContactMe() {
    return (
        <div>
          <div className="contact">
                <h1>{string.contactMe[window.userLang]}</h1>
                <div className="contLink">
                    <div class="lnkEl"><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/noé-juzan-a3aa88210"><img src={'./svgs/linkedin.svg'} alt="linkedin"/></a></div>
                    <div class="lnkEl"><a target="_blank" rel="noreferrer" href="https://github.com/NoeJuza"><img src={'./svgs/github.svg'} alt="github"/></a></div>
                    <div class="lnkEl"><a href="mailto:noe.juzan.pro@gmail.com"><img class="mail" src={"./svgs/mail.svg"} alt="mail"/></a></div>
                </div>
          </div>
        </div>
    );
  }
  
  export default ContactMe;