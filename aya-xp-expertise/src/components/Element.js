import React from "react";
import classNames from 'classnames'

export const Element = ({ member, reversed, handleClick }) => {
    const name = member.name;
    const imageSrc = member.img;
    const role = member.role;
    const handleEvent = () => handleClick(name);

  return (
        <div className={
            classNames(reversed? "pr4 flex-row-reverse reversed" : "pl4", "element flex flex-row mb3")
        } onClick={handleEvent}>
            <img
            src={require(`../data/images/${imageSrc}`)}
            alt={name}
            className="rounded w-30"
            />
            <div className={
                classNames({"items-end": reversed}, "details flex flex-column w-100 self-end mb2")
            }>
                <span className="name tracked">{name}</span>
                <span className="tracked">{role}</span>
                <div className="line w-40"/>
            </div>
        </div>
  );
};
