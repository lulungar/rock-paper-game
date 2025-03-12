import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.myModalContent}>
        <div className={cl.top}>
          <h1>RULES</h1>
          <img
            onClick={() => setVisible(false)}
            src="/images/icon-close.svg"
            alt=""
          />
        </div>
        <img src="/images/image-rules.svg" alt="" />
      </div>
    </div>
  );
};

export default MyModal;
