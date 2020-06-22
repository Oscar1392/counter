const { Component } = require("react");

import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div className="container">
      <div className="navbar">Counter.js</div>

      </div>
    )
  }
}

export default Counter;