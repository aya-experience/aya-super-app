import React from "react";
import io from "socket.io-client";
import { Notification } from "./Notification";
import qr from "./qrwhite.png";
import mobile from "./mobile.svg";
import arrow from "./arrow.svg";

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
        window.location.replace("http://192.168.1.134:3000/team");
      }, 3000);
    });
  }

  render() {
    return (
      <div className="bg-near-black app desktop">
        <div className="container">
          <div className="mega-size">
            <div className="icon-kanji" />
            <h1>TEAM</h1>
          </div>

          <div className="columns weird-margin">
            <div className="column">
              <p className="p-mobile custom-margin">
                Visite nos planètes directement...
              </p>
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="column">
              <img src={mobile} alt="mobile" className="mobile-mini" />
              <p className="p-mobile">
                OU prend le controle avec ton smartphone
              </p>
              <img src={qr} alt="qr" className="qr" />
            </div>
          </div>

          <Notification
            text="A decide has been successfully connected. Wait a second for being redirected"
            isVisible={this.state.isMobileAvailable}
          />
        </div>
      </div>
    );
  }
}
