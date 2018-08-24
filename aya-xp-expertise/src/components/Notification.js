import React from "react";

export const Notification = ({ handleClick, text, isVisible }) => (
  <div
    className={`notification custom-notification is-primary ${
      isVisible ? "active" : ""
    }`}
  >
    <button className="delete" onClick={handleClick} />
    {text}
  </div>
);
