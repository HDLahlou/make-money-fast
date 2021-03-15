import ReCAPTCHA from "react-google-recaptcha";
import React, { Component } from 'react';
import './App.css';

class Captcha extends Component {

    onChange(value) {
        console.log("Captcha value:", value);
    }

    render(){
        return (
            <ReCAPTCHA
                sitekey="6Ldl24AaAAAAAKCkfzjpIcTDSkgf7ILJ0vE2deRm"
                onChange={this.onChange}
            />
        )
    }
}


export default Captcha;
