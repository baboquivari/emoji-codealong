import React, { Component } from 'react';
import Emojis from './Emojis';
import EmojiJSON from './emojiList.json';


class App extends Component { 
    constructor (props) {
        super(props);
        // SET THE STATE HERE
        this.state = {
            list: EmojiJSON,
            input: ''
        }
        // SET UP YOUR OWN CUSTOM FUNCTIONS HERE
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput (event) {

        // every time the input changes on the search bar, we want to loop through all the emojis, checking the event.target.value against the keywords inside each emoji object, and then filtering out the objects that don't match. FINALLY, setting the state with the new array.

        this.setState({
            input : event.target.value
        })
    }

    render () {
        return (
            <div className="app">
                <input 
                    className="searchbar"
                    placeholder="Type something"
                    onChange={this.handleInput}
                />
                {<Emojis parentState={this.state.list}/>}
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