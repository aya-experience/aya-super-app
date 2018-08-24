import React from "react";

export const Element = ({ name, imageSrc, handleClick }) => {
  const handleEvent = () => handleClick(name);

  return (
    <div className="column is-6" onClick={handleEvent}>
      <img
        src={require(`../data/images/${imageSrc}`)}
        alt={name}
        className="br-pill rounded"
      />
    </div>
  );
};
