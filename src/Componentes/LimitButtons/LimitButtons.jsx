import React from "react";
import { css } from "emotion";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const component_styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 1rem;
    font-size: 22px;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.33);
    transition: 0.5s all;
    cursor: pointer;
    outline: none;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const LimitButtons = ({ match, setLimit, limit, setItems }) => {
  let urlPageParam = match.params.page;

  const onLimitButtonClick = (event) => {
    const newLimit = +event.target.getAttribute("datalimit");
    if (limit !== newLimit) {
      setLimit(newLimit);
      setItems(urlPageParam, newLimit);
    }
  };

  return (
    <div className={component_styles}>
      <button datalimit="10" onClick={onLimitButtonClick}>
        10
      </button>
      <button datalimit="20" onClick={onLimitButtonClick}>
        20
      </button>
      <button datalimit="50" onClick={onLimitButtonClick}>
        50
      </button>
    </div>
  );
};

export default withRouter(LimitButtons);

LimitButtons.propTypes = {
  setLimit: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setItems: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
