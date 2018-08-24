import React, { Component } from "react";
import io from "socket.io-client";
import { Element } from "./Element";
import { Navbar } from "./Navbar";
import { Notification } from "./Notification";
import members from "../data/members.json";

export class Mobile extends Component {
  constructor(props) {
    super(props);

    this.socket = io("http://192.168.1.127:2018");
    this.state = { isBrowserActived: false };
  }

  handlePress = name => {
    this.socket.emit("do-stuff-on-browser", { name });
  };

  componentDidMount() {
    this.socket.emit("connect-mobile");
    this.socket.on("connect-browser", () => {
      this.setState({ isBrowserActived: true });
    });
  }

  handleNotification = () => {
    this.setState({ isBrowserActived: false });
  };

  render() {
    return (
      <div>
        <Notification
          text="Well connected to the browser!"
          handleClick={this.handleNotification}
          isVisible={this.state.isBrowserActived}
        />

        <Navbar />
        <div className="pa4">
          <div className="columns is-mobile is-multiline">
            {members.map(member => (
              <Element
                handleClick={this.handlePress}
                key={member.name}
                imageSrc={member.img}
                name={member.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
