import './Popup.css'
import React from 'react'

export default class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
            <div className='popupCloseDiv' onClick={this.props.closePopup}></div>
            <div className='popup_inner' onClick={() => {return false}}>
                <div className="popupHead">
                    <span class="popupTitle">{this.props.title}</span>
                    <span class="popupClose" onClick={this.props.closePopup}>x</span>
                </div>
                <div className="popupBody">
                    <p class="popupText">{this.props.text}</p>
                </div>
            </div>
        </div>
      );
    }
}