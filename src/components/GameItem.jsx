import React from "react";

const GameItem = ({ style, imgSrc, ...props }) => {
  return (
    <button {...props} className={style}>
      <img src={imgSrc} alt="" />
    </button>
  );
};

export default GameItem;
