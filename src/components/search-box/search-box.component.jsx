import React from "react";
import "./search-box.styles.css";

// Functional Component or Presentational component
// No access to lifecycle methods, state
// Can only use props, and returns html
export const SearchBox = ({placeholder, handleChange}) => {
  return (
      <div >
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
      </div>
  );
};
