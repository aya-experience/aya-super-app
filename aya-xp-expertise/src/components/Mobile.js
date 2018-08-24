import React, { Component } from "react";
import io from "socket.io-client";

export class Mobile extends Component {
  constructor(props) {
    super(props);

    this.socket = io("http://localhost:2018");
  }

  componentDidMount() {
    this.socket.emit("connect-mobile");
  }

  render() {
    return <div>Mobile Display</div>;
  }
}
