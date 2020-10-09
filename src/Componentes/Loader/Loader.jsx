import { css } from "emotion";
import React from "react";
import preloader from "../../images/loader.svg";

const component_styles = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
`;

const Loader = (props) => {
  return (
    <div className={component_styles}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Loader;
