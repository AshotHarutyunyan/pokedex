import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";

const component_styles = css`
  margin: 0.25rem;
  padding: 0 0 20px;
  flex: 1 1 0 !important;
  max-width: 24%;
  min-width: 20%;
  display: flex;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 669px) {
    max-width: 48%;
    min-width: 40%;
  }
  @media (max-width: 480px) {
    margin: 0.25rem;
    width: 40% !important;
    max-width: 43% !important;
    min-width: 40% !important;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 1178px) {
    max-width: 32%;
    min-width: 29%;
  }
`;

const PokemonItem = ({ itemImage }) => {
  return (
    <div className={component_styles}>
      <img src={itemImage} alt="pokemonImage" />
    </div>
  );
};

PokemonItem.propTypes = {
  itemImage: PropTypes.string.isRequired,
};

export default PokemonItem;
