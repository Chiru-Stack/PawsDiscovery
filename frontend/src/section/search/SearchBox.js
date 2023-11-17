import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

import classes from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={classes.searchContainer}>
      <h1>Search Pet</h1>
      <div className={classes.searchBar}>
        <input placeholder="Search your pet with name or breed"/>
        <FontAwesomeIcon
          className={classes.search}
          icon={icon({ name: "magnifying-glass", style: "solid" })}
        />
      </div>
    </div>
  );
};

export default SearchBox;
