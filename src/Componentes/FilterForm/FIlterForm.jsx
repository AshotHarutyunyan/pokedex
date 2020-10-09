import React, { useState } from "react";
import { css } from "emotion";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const component_styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  input {
    max-width: 320px;
    width: 100%;
    padding: 1rem;
  }
`;

const FIlterForm = ({
  allItems,
  filterAndSetItems,
  setItems,
  match,
  limit,
  isFiltered,
}) => {
  let urlPageParam = match.params.page;
  const [value, setValue] = useState("");

  const inputChange = (event) => {
    let text = event.target.value;
    setValue(text);
    if (text.length >= 3) {
      filterAndSetItems(allItems, text);
    } else if (isFiltered) {
      setItems(urlPageParam, limit);
    }
  };

  return (
    <div className={component_styles}>
      <input
        type="text"
        placeholder="Write filter type"
        value={value}
        onChange={inputChange}
      />
    </div>
  );
};

export default withRouter(FIlterForm);

FIlterForm.propTypes = {
  match: PropTypes.object.isRequired,
  limit: PropTypes.number.isRequired,
  allItems: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  filterAndSetItems: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};
