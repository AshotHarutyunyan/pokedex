import { nanoid } from "nanoid";
import { css } from "emotion";
import React from "react";
import PaginationItem from "./PaginationItem";
import { NavLink, Redirect } from "react-router-dom";
import { PaginationLogic } from "../../Helpers/PaginationHelper";
import PropTypes from "prop-types";

const component_styles = css`
  max-width: 320px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  .items {
    overflow: hidden;
    padding: 1rem;
    border-radius: 10px;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  .active {
    pointer-events: none;
  }
`;

const PaginationContainer = ({ ItemsCount, pageItemsCount, currentPage }) => {
  const pagesCount = Math.round(ItemsCount / pageItemsCount);

  let [showpagesat, showpagesTo] = PaginationLogic(
    currentPage,
    ItemsCount,
    pageItemsCount,
    pagesCount
  );

  let pages = [];

  for (let i = showpagesat; i <= showpagesTo; i++) {
    let key = nanoid();
    pages.push(<PaginationItem key={key} item={i}></PaginationItem>);
  }

  if (pagesCount < currentPage && pagesCount !== 0) {
    return <Redirect to={`/page/${pagesCount}`} />;
  }

  return (
    <div className={component_styles}>
      <NavLink
        to={`/page/${currentPage - 1}`}
        className={currentPage === 1 ? "active" : ""}
      >
        ◄
      </NavLink>
      <div className="items">{pages}</div>
      <NavLink
        to={`/page/${currentPage + 1}`}
        className={currentPage === pagesCount ? "active" : ""}
      >
        ►
      </NavLink>
    </div>
  );
};

PaginationContainer.propTypes = {
  ItemsCount: PropTypes.number.isRequired,
  pageItemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationContainer;
