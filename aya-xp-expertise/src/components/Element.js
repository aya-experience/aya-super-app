import React from "react";

export const Element = ({ name, imageSrc }) => (
  <div className="column is-6" onClick={() => null}>
    <img
      src={require(`../data/images/${imageSrc}`)}
      alt={name}
      className="br-pill rounded"
    />
  </div>
);
