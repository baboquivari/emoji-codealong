import React, { Component } from 'react';
import Emojis from './Emojis'


class App extends Componentzzzzz { 
    constructor (props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
            input: ''
        }
    }

    render () {
        return (
            <div className="app">
                <input 
                    className="searchbar"
                    placeholder="Type something"
                />
                <Emojis parentState={this.state.list}/>
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