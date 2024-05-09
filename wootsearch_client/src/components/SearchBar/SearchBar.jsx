import * as React from "react";
import "./SearchBar.css";
import { SearchBox } from "@fluentui/react/lib/SearchBox";

export const SearchBar = () => (
  <>
    <div className="search-bar">
      <SearchBox placeholder="Search" underlined={true} />
    </div>
  </>
);
