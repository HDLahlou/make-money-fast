import React, { Component } from 'react';
import './App.css';

class Hero extends Component {
  // Below was testing linking through button componets

  render() {
    let h1Class
    if (this.props.level == 0) {
        h1Class = "animate"
    }
    return (
      <div className="heroBanner">
        <img
          className="heroImg"
          src={this.props.img}
          alt="heroImg"
        />
        <div className="hero-text">
          <h1 className={h1Class}>{this.props.title}</h1>
          <p>{this.props.desc}</p>
          <button onClick={this.props.func}>{this.props.buttonTxt}</button>
        </div>
      </div>
      );
  }
}


export default Hero;
