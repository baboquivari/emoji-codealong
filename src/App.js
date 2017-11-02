import React, { Component } from 'react';
//  TODO: import the JSON emoji list

// TODO: import the Emojis component


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // TODO: create the state properties
    }
    // remember, whenever we create our own method on a React Component Class, we need to modify it with this line - which enables the method to be called properly
    // TODO: add bound handlers...
  }

  // TODO: Add a handler

  render() {
    return ( 
      <div>

        {/* TODO: Grab a header from BULMA */}

        <div className="main">
          {/* TODO: Add an input bar */}
          
        {/* TODO: Render the emojis, using component composition */}

        </div> 
      </div>
    )
  }
}

export default App;