import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./MatchingContacts.css";

const MatchingContacts = (
  {
    data,
    highlightedIndex,
    downshiftGetMenuProps,
    downshiftGetItemProps,
  },
) => {
  // FIXED - TODO something is missing here
  if (data.length === 0) {
    return null;
  }

  return (
    <ul
      {...downshiftGetMenuProps()}
      className="MatchingContacts"
    >
      {data.map((item, index) => (
        <li
          {...downshiftGetItemProps({
            key: item.id,
            item: item,
            // FIXED - TODO something is wrong here
            className: classNames(
              "MatchingContacts_item",
              {
                "MatchingContacts_item_highlighted": highlightedIndex === index,
              }),
          })}
        >
          {item.value}
        </li>
      ))}
    </ul>
  );
};

MatchingContacts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  highlightedIndex: PropTypes.number,
  downshiftGetMenuProps: PropTypes.func.isRequired,
  downshiftGetItemProps: PropTypes.func.isRequired,
};

export default MatchingContacts;
