import React, { Component } from 'react';
import './App.css';
// Local Imports
import Hero from './Hero.js'
import initHeroImg from './resources/initHeroImg2.jpg'
import Content from './Content.js'

// Local Images






export default class App extends Component<{}> {
  state = {
    // State
    hero: '',
    heroTitle: "",
    heroDesc: "",
    content: 0,
    images: [],
    text: [],
    // Const

  };


  componentWillUnmount() {
  }

  componentDidMount() {
    let heroImg = initHeroImg
    let heroTitle = "Earn More"
    let heroDesc = "The Easy Way"
    let content = 2
    let images = [initHeroImg, initHeroImg]
    let text = []
    text[0] = {
        key: "Title1",
        val: "Desc1"
    }
    text[1] = {
        key: "Title1",
        val: "Desc1"
    }
    this.setState((prevState, props) => {
        return {
          hero: heroImg,
          heroTitle: heroTitle,
          heroDesc: heroDesc,
          content: content,
          images: images,
          text: text
        }
      })
  }

  componentWillMount() {
  }

  // ===========FUNCTIONS FOR PRODUCTION FRONT END DISPLAY===========


  // ======================
  // RENDER
  render() {
    let {hero, heroTitle, heroDesc, content, images, text} = this.state

    let contentArray = []
    if(content > 0){
      for(let i = 0; i < content; i++){
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

    return (
      <div className="main">
        <Hero title={heroTitle} desc={heroDesc} img={hero}/>
        <div className="mainBody">
            {contentArray}
        </div>
      </div>
    );
  }
}