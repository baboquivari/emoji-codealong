import React, { Component } from 'react';
import Emojis from './Emojis';
import EmojiJSON from './emojiList.json';


class App extends Component { 
    constructor (props) {
        super(props);
        // SET THE STATE HERE
        this.state = {
            list: [],
            input: ''
        }
        // SET UP YOUR OWN CUSTOM FUNCTIONS HERE
        this.handleInput = this.handleInput.bind(this);
        this.handleEmojiClick = this.handleEmojiClick.bind(this);
    }

    handleEmojiClick (event) {
        // innerHTML
        var emoji = event.target.innerHTML;
        // actual Node
        var emojiElement = event.target;

        emojiElement.style.backgroundColor = "red";

        var textArea = document.createElement('textarea')
        textArea.textContent = emoji;
        document.body.appendChild(textArea);
        textArea.select();

        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    
    handleInput (event) {
        // SANITISE
        var input = event.target.value.toLowerCase();
        
        // CSS LOGIC
        
        // every time the input changes on the search bar, we want to loop through all the emojis, checking the event.target.value against the keywords inside each emoji object, and then filtering out the objects that don't match. FINALLY, setting the state with the new array.
        
        var newArray = EmojiJSON.filter(function (emojiObject) {
            if (emojiObject.keywords.includes(input)) {
                if (input === '') return;

                else return emojiObject;
            }
        })
        
        this.setState({
            input: input,
            list : newArray
        })

        if (this.state.input === '') {
            this.setState({
                list: []
            })
        }
    }

    render () {
        return (
            <div className="app">
                <input 
                    className="searchbar"
                    placeholder="Type something"
                    onChange={this.handleInput}
                />
                {<Emojis 
                    parentState={this.state.list}
                    handleEmojiClick={this.handleEmojiClick}
                />}
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