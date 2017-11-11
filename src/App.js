import React, { Component } from 'react';
import Emojis from './Emojis';
import EmojiJSON from './emojiList.json';
import { debounce, copyToClipBoard } from './helpers';
import Notifications, { notify } from 'react-notify-toast'; // => npm package for notifications

class App extends Component { 
    constructor (props) {
        super(props);

        // SET THE STATE HERE
        this.state = {
            list: [],
            input: '',
            lastEmojiClicked: '',
            debouncedFunc: debounce(function (newArray) {
                this.setState({
                    list: newArray
                })
            }, 750, this)
        }

        // SET UP YOUR OWN CUSTOM FUNCTIONS HERE
        this.handleInput = this.handleInput.bind(this);
        this.handleEmojiClick = this.handleEmojiClick.bind(this);
    }

    handleEmojiClick (event) {
        // innerHTML
        var emoji = event.target.innerHTML;
        // actual Element
        var emojiElement = event.target;

        // set this emoji onto the state, so that the next time this handler runs, we can quickly reference it and clear all CSS before setting new CSS on a new emoji
        this.setState({
            emoji: emojiElement
        })

        // if there is an emoji sat in the state, let's frikkin clear it's CSS right now
        if (this.state.emoji) {
            this.state.emoji.removeAttribute('style');
        }

        emojiElement.style.backgroundColor = "skyblue";

        // copy to clipboard functionality, extracted to helpers.js
        copyToClipBoard(emoji);
        notify.show('Copied to clipboard!', 'custom', 1000, {background: 'white', text: '#00D1B2'});
    }

    handleInput (event) {
        var input = event.target.value.toLowerCase();
        
        var newArray = EmojiJSON.filter(function (emojiObject) {
            if (emojiObject.keywords.includes(input)) {
                if (input === '') return;
                else return emojiObject;
            }
        })
        
        this.setState({
            input: input
        })

        this.state.debouncedFunc(newArray);

        // don't render any emojis if the searchbar is empty
        if (this.state.input === '') {
            this.setState({
                list: []
            })
        }
    }
        
    render () {
        return (
            <div>
                <Notifications />
                <section className="hero is-small is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                            👻💩🐔 &nbsp; Emoji Funtime! &nbsp; 😁😆😍
                            </h1>
                        </div>
                    </div>
                </section>

                <div className="main">
                    <input 
                        className="input"
                        placeholder="Type something"
                        onChange={this.handleInput}
                        value={this.state.input}
                    />
                    <div id="emojis">
                        {<Emojis 
                            parentState={this.state.list}
                            handleEmojiClick={this.handleEmojiClick}
                        />}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

























//   constructor(props) {
//     super(props);
//     this.state = {
//       // TODO: create the state properties
//     }
//     // remember, whenever we create our own method on a React Component Class, we need to modify it with this line - which enables the method to be called properly
//     // TODO: add bound handlers...
//   }

//   // TODO: Add a handler

//   render() {
//     return ( 
//       <div>

//         {/* TODO: Grab a header from BULMA */}

//         <div className="main">
//           {/* TODO: Add an input bar */}
          
//         {/* TODO: Render the emojis, using component composition */}

//         </div> 
//       </div>
//     )
//   }
// }

// export default App;