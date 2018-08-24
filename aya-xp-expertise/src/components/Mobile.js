import React, { Component } from "react";
import io from "socket.io-client";

export class Mobile extends Component {
  constructor(props) {
    super(props);

    this.socket = io("http://192.168.1.127:2018");
  }

  handlePress = () => {
    this.socket.emit("do-stuff-on-browser");
  };

  componentDidMount() {
    this.socket.emit("connect-mobile");
  }

  render() {
    return <button onClick={this.handlePress}>Mobile Display</button>;
  }
}
