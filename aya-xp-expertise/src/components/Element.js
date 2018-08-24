import React from "react";
import classNames from 'classnames'

export const Element = ({ member, reversed, handleClick }) => {
    const name = member.name;
    const imageSrc = member.img;
    const role = member.role;
    const handleEvent = () => handleClick(name);

  return (
        <div className={
            classNames(reversed? "pr4 flex-row-reverse reversed" : "pl4", "element flex flex-row pb3")
        } onClick={handleEvent}>
            <img
            src={require(`../data/images/${imageSrc}`)}
            alt={name}
            className="rounded"
            />
            <div className={
                classNames(
                    {"items-end tr": reversed},
                    "details flex flex-column w-100 self-end"
                )}>
                <span className="name tracked">{name}</span>
                <span className="tracked">{role}</span>
                <div className="line"/>
            </div>
        </div>
  );
};
