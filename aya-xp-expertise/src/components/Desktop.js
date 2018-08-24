import React, { Component } from "react";
import io from "socket.io-client";

export class Desktop extends Component {
  constructor(props) {
    super(props);

    this.socket = io("http://localhost:2018");
  }

  componentDidMount() {
    this.socket.emit("connect-browser");
  }

  render() {
    return <div>Home Desktop</div>;
  }
}
