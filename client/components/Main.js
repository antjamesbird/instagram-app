import React, { Component } from "react";
import { Link } from "react-router";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photo App</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
