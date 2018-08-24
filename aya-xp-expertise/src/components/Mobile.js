import React, { Component } from "react";
import io from "socket.io-client";
import { Element } from "./Element";
import { Navbar } from "./Navbar";
import members from "../data/members.json";

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
    return (
      <div>
        <Navbar />
        <div className="pa4">
          <div className="columns is-mobile is-multiline">
            {members.map(member => (
              <Element
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
