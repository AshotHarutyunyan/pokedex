import React, { useEffect } from "react";
import { css, injectGlobal } from "emotion";
import FIlterForm from "./FilterForm/FIlterForm";
import PaginationContainer from "./Pagination/PaginationContainer";
import { Redirect, Route } from "react-router-dom";
import Pokemons from "./Pokemons/Pokemons";
import { setCurrentPage, setLimit } from "../Redux/actions/actioncreators";
import {
  setAllItems,
  filterAndSetItems,
  setItems,
} from "../Redux/actions/thunks";
import { connect } from "react-redux";
import LimitButtons from "./LimitButtons/LimitButtons";
import Loader from "./Loader/Loader";
import {
  getAllItemsSl,
  getCurrentPageSl,
  getIsFilteredSl,
  getItemsSl,
  getLimitSl,
  getRequestStatusSl,
  getErrorSl,
} from "../Redux/Selectors/AppSelectors";
import PropTypes from "prop-types";

injectGlobal`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
      width: 100%;
      height: 100vh;
    }
`;

const component_styles = css`
  color: green;
  background: #b9ff5d;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .itemsContainer {
    flex-grow: 1;
  }
`;

function App({
  currentpage,
  setCurrentPage,
  items,
  setItems,
  setLimit,
  limit,
  requestStatus,
  setAllItems,
  allItems,
  filterAndSetItems,
  isFiltered,
  error,
}) {
  useEffect(() => {
    if (+allItems.length === 0) {
      setAllItems(1050);
    }
  }, [allItems.length, setAllItems]);

  return (
    <div className={component_styles}>
      {!requestStatus && <Loader />}
      <FIlterForm
        allItems={allItems}
        filterAndSetItems={filterAndSetItems}
        setItems={setItems}
        limit={limit}
        isFiltered={isFiltered}
      />
      <LimitButtons setLimit={setLimit} limit={limit} setItems={setItems} />
      <div className="itemsContainer">
        <Route exact path="/" render={() => <Redirect to="/page/1" />} />
        <Route
          path="/page/:page"
          render={() => (
            <Pokemons
              setCurrentPage={setCurrentPage}
              currentpage={currentpage}
              items={items}
              setItems={setItems}
              limit={limit}
              error={error}
              requestStatus={requestStatus}
            />
          )}
        />
      </div>
      <PaginationContainer
        ItemsCount={isFiltered ? +items.length : +allItems.length}
        pageItemsCount={limit}
        currentPage={currentpage}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentpage: getCurrentPageSl(state),
  items: getItemsSl(state),
  limit: getLimitSl(state),
  allItems: getAllItemsSl(state),
  requestStatus: getRequestStatusSl(state),
  isFiltered: getIsFilteredSl(state),
  error: getErrorSl(state),
});

const mapDispatchToProps = {
  setCurrentPage,
  setLimit,
  setAllItems,
  filterAndSetItems,
  setItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  currentpage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  setLimit: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  requestStatus: PropTypes.bool.isRequired,
  setAllItems: PropTypes.func.isRequired,
  allItems: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  filterAndSetItems: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
