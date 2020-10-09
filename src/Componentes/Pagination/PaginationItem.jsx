import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";
import PropTypes from "prop-types";

const component_styles = css`
  color: #000000;
  padding: 0 1rem;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;

const active_styles = css`
  font-weight: bold;
  cursor: normal;
  pointer-events: none;
  &:hover {
    font-weight: bold;
  }
`;

const PaginationItem = ({ item }) => {
  return (
    <NavLink
      to={`/page/${item}`}
      className={component_styles}
      activeClassName={active_styles}
    >
      {item}
    </NavLink>
  );
};

PaginationItem.propTypes = {
  item: PropTypes.number.isRequired,
};

export default PaginationItem;
