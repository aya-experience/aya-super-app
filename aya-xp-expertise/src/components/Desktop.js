import React from "react";
import io from "socket.io-client";
import { Notification } from "./Notification";
import qr from "./qr.png";

export class Desktop extends React.Component {
  constructor(props) {
    super(props);

    this.socket = io("http://192.168.1.127:2018");

    this.state = { isMobileAvailable: false };
  }

  componentDidMount() {
    this.socket.emit("connect-browser");
    this.socket.on("connect-mobile", () => {
      this.setState({ isMobileAvailable: true });

      setTimeout(() => {
        window.location.replace("http://stackoverflow.com");
      }, 3000);
    });
  }

  render() {
    return (
      <div className="bg-near-black app">
        <img src={qr} alt="qr code" className="qr" />
        <Notification
          text="A decide has been successfully connected. Wait a second for being redirected"
          isVisible={this.state.isMobileAvailable}
        />
      </div>
    );
  }
}
