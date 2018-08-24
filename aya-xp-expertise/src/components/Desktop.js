import React, { Component } from "react";
import io from "socket.io-client";

export class Desktop extends Component {
  constructor(props) {
    super(props);

    this.socket = io("http://localhost:2018");
  }

  componentDidMount() {
    this.socket.emit("connect-browser");
    this.socket.on("do-stuff-on-browser", () => alert("WTF"));
  }

  render() {
    return <div>Home Desktop</div>;
  }
}
