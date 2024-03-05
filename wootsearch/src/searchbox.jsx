import * as React from "react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { TextField } from "@fluentui/react/lib/TextField";

export const SearchBar = () => (
  <TextField label="With placeholder" placeholder="Please enter text here" />
  // <SearchBox placeholder="Search" underlined={true} />
  // <div>SearchBox</div>
);
