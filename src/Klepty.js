import React, { Component } from 'react';
import './App.css';
import klepty from './resources/klepty.png'
import speechBubble from './resources/conversation_bubble.png'
import C from "./resources/const.json"

class Klepty extends Component {
    state = {
        // State
        kleptySays: C.klepty.dialogue0,
        responses: C.klepty.response0,
        level: 0,
      };

  chooseResponse(index) {
    let {kleptySays, responses} = this.state

    let dKey = responses[index].nextDialogue
    let rKey = responses[index].nextResponse

    this.setState((prevState, props) => {
        return {
            kleptySays: C.klepty[dKey],
            responses: C.klepty[rKey]
        }
      })
  }

  render() {
    let {kleptySays, responses} = this.state
    let userResponse = []
    let textToRender = kleptySays
    for (let index = 0; index < responses.length; index++) {
        userResponse.push(<button
                            onClick={() => this.chooseResponse(index)}>
                         {responses[index].txt}
                            </button>)
        
    }
    return (
      <div class="klepty">
        <img
          class="kleptyImg"
          src={klepty}
          alt="kleptyImg"
        />
        <div class="kleptyText">
            <img
                class="kleptySpeech"
                src={speechBubble}
                alt="speechBubble"
            />
            <div class="kleptySays">
                <p>{textToRender}</p>
            </div>
            <div class="options">
                {userResponse}
            </div>
        </div>
      </div>
      );
  }
}


export default Klepty;
