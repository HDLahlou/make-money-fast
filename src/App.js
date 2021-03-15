    import React, { Component } from 'react';
    import './App.css';
    // Local Imports
    import Hero from './Hero.js'
    import Content from './Content.js'
    import Klepty from './Klepty.js'
    import Captcha from './Captcha.js'

    // Const Json
    import C from "./resources/const.json"
    // Local Images
    // import klepty from './resources/klepty.png'
    import bankImg from './resources/bankImage.jpg'

    import initHeroImg from './resources/initHeroImg2.jpg'
    import initIm0 from './resources/mad_desk.jpg'
    import initIm1 from './resources/happy_desk.jpg'

    import bankHeroImg from './resources/bankImage.jpg'
    import bankIm0 from './resources/bank_fustrated.jpg'
    import bankIm1 from './resources/bank_money.jpg'
    import bankIm2 from './resources/bank_safe.jpg'





    export default class App extends Component<{}> {
    state = {
    // State
    hero: '',
    heroTitle: "",
    heroDesc: "",
    buttonTxt: "",
    contentNum: 0,
    images: [],
    text: [],
    level: 0,
    showKlepty: false,
    showLogin: false,
    username: "",
    password: ""
    // Const

    };

    setStateValues(val) {
    let source
    let heroImg
    let images
    let level

    switch (val) {
        case 0:
            source = C.landing
            heroImg = initHeroImg
            images = [initIm0, initIm1]
            level = 0
            break;

        case 1:
            source = C.bank
            heroImg = bankHeroImg
            images = [bankIm0, bankIm1, bankIm2]
            level = 1
            break;

        default:
            source = C.landing
            heroImg = initHeroImg
            images = [initIm0, initIm1]
            level = 0
            break;
    }

    let heroTitle = source.heroTitle
    let heroDesc = source.heroDesc
    let contentNum = source.contentNum
    let buttonTxt = source.buttonTxt
    let text = []

    for (let index = 0; index < contentNum; index++) {
        let key = `content${index}`
        text.push(source[key])
    }

    this.setState((prevState, props) => {
        return {
            hero: heroImg,
            heroTitle: heroTitle,
            heroDesc: heroDesc,
            buttonTxt: buttonTxt,
            contentNum: contentNum,
            images: images,
            text: text,
            level: level
        }
        })

        return 0
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    let ret = this.setStateValues(0)
    }

    componentWillMount() {
    }

    startKlepty = e => {
    let {showKlepty, level} = this.state
    if (showKlepty == false && level == 0) {
        if (window.confirm("Warning: You may regret this decision")) {
            window.alert("Ok well... We are not liable for anything that happens")
            this.setState((prevState, props) => {
                return {
                    showKlepty: true

                }
            })
        } else {
        window.alert("Good choice! You're probably not cut out for this anyways")
        }
    }
    }

    adClicked() {
        let {showKlepty} = this.state

        if (showKlepty)
            this.setStateValues(1)
    }

    showLogin = e => {
            this.setState((prevState, props) => {
                return {
                    showLogin: true
                }
            })
    }

    setUsername(name) {
        this.setState((prevState, props) => {
            return {
                username:name
            }
        })
    }

    setPassword(pwd) {
            this.setState((prevState, props) => {
                return {
                    password:pwd
                }
            })
    }

    signIn(e) {
        let {username, password} = this.state
        if (username == "US.Gov" && password == "BigMoney123!") {
            this.setState((prevState, props) => {
                return {
                    level: 2,
                    showLogin: false

                }
            })
        }
    }

    // ======================
    // RENDER
    render() {
    let {hero, heroTitle, heroDesc, contentNum, images, text, showKlepty, showLogin, level, buttonTxt} = this.state

    let contentArray = []
    if(contentNum > 0 && level < 2){
        for(let i = 0; i < contentNum; i++){
        let form = i%2
        let key = `content${i}`
        contentArray.push(
        <Content
            key={key}
            format={form}
            img={images[i]}
            title={text[i].key}
            desc={text[i].val}
            />)
        }
    }

    let leftSidebar

    if (showKlepty) {
        leftSidebar = <Klepty level={level}/>
    }

    let ad_txt = C.landing.ad_txt[Math.floor(Math.random() * 3)]
    let  rightSidebar
    let funcProp = this.showLogin

    if (level == 0) {
        rightSidebar = <div class="rightSidebarDiv" onClick={() => this.adClicked()}> <img class="ad" src={bankImg}/> <p class="ad_txt"> {ad_txt} </p> </div>
        funcProp = this.startKlepty
    }

    let loginComp
    if (showLogin && level < 2) {
        loginComp =   <div class="loginContainer">
                        <label for="uname"><b>Username</b></label>
                        <input onChange={e => this.setUsername(e.target.value)}type="text" placeholder="Enter Username" name="uname" required/>

                        <label for="psw"><b>Password</b></label>
                        <input onChange={e => this.setPassword(e.target.value)}type="password" placeholder="Enter Password" name="psw" required/>

                        <button onClick={e => this.signIn(e)} type="submit">Login</button>
                    </div>
    }

    if (level >= 2) {
        contentArray.push(<h1 class="center">Hello Customer. Please prove you are human with the below Captcha</h1>)
        contentArray.push(<h1 class="center">Hello Customer. Please prove you are human with the below Captcha</h1>)

    }
    return (
        <div className="main">
        <Hero level={level} buttonTxt={buttonTxt} title={heroTitle} desc={heroDesc} img={hero}  func={funcProp}/>

        <div className="mainBody">
            <Captcha/>
            {loginComp}
            {contentArray}
        </div>

        <div className="leftSidebar">
            {leftSidebar}
        </div>
        <div className="rightSidebar" >
            {rightSidebar}
        </div>
        </div>
    );
    }
    }