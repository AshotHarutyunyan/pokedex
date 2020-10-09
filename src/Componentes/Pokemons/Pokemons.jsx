import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { css } from "emotion";
import PokemonItem from "./PokemonItem";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const component_styles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Pokemons = ({
  match,
  currentpage,
  setCurrentPage,
  items,
  limit,
  setItems,
  error,
  requestStatus,
}) => {
  let urlPageParam = match.params.page;

  useEffect(() => {
    setItems(urlPageParam, limit);
  }, [setItems, urlPageParam, limit]);

  useEffect(() => {
    if (urlPageParam !== currentpage) {
      setCurrentPage(+urlPageParam);
    }
  }, [urlPageParam, currentpage, setCurrentPage]);

  let images = items.map((item) => {
    let key = nanoid();
    return <PokemonItem key={key} itemImage={item} />;
  });

  return (
    <div>
      <div className={component_styles}>{images}</div>
      {images.length === 0 && requestStatus && (
        <div>no pokemon for this request</div>
      )}
      {error.length !== 0 && <div>Erorr 404 bad request</div>}
    </div>
  );
};

export default withRouter(Pokemons);

Pokemons.propTypes = {
  currentpage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  setLimit: PropTypes.func,
  limit: PropTypes.number.isRequired,
  requestStatus: PropTypes.bool.isRequired,
  setItems: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
