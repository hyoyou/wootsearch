import * as React from "react";
import "./SearchBar.css";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import DisplayItems from "../DisplayItems";

export const SearchBar = () => (
  <>
    <div className="search-bar">
      <SearchBox placeholder="Search" underlined={true} />
    </div>
    <div>
      <DisplayItems />
    </div>
  </>
);
