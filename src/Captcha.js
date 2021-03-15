import React, { Component } from 'react';
import './App.css';
import captcha0 from "./resources/captcha/downloadacar.jpg"
import captcha1 from "./resources/captcha/iamahuman.jpg"
import captcha2 from "./resources/captcha/propertyistheft.jpg"
import captcha3 from "./resources/captcha/whatisreal.jpg"
import captcha4 from "./resources/captcha/whenwillitend.jpg"

import C from "./resources/const.json"


class Captcha extends Component {
    state = {
        // State
        captchaImg: "",
        input: "",
        comp: "",
        iter: 0
    };

    selectCaptcha() {
        let index = Math.floor(Math.random() * 5)
        let captcha_txt = C.captchaTxt[index]
        let captchaImg
        switch (index) {
            case 0:
                captchaImg = captcha0
                break;
            case 1:
                captchaImg = captcha1
                break;
            case 2:
                captchaImg = captcha2
                break;
            case 3:
                captchaImg = captcha3
                break;
            case 4:
                captchaImg = captcha4
                break;
            default:
                captchaImg = captcha0
                captcha_txt = C.captchaTxt[0]
                break;
        }

        this.setState((prevState, props) => {
            return {
                captchaImg : captchaImg,
                comp : captcha_txt,
                input: ''
            }
        })
    }

    componentDidMount() {
        this.selectCaptcha()
    }

    onChange(e) {
        e.preventDefault();

        this.setState((prevState, props) => {
            return {
                input: e.target.value
            }
        })
    }

    onSubmit(e) {
        let {input, comp, iter} = this.state

        if (input == comp) {
            iter += 1
            this.selectCaptcha()
            this.props.func()
        }
    }

    render(){
        let {captchaImg, input} = this.state
        return (
            <div class="loginContainer">
                <img src={captchaImg}/>
                <input onChange={e => this.onChange(e)} type="text" placeholder="Enter Captcha" name="input" value={input} required/>
                <button onClick={e => this.onSubmit(e)} type="submit">Submit</button>
            </div>
        )
    }
}


export default Captcha;
