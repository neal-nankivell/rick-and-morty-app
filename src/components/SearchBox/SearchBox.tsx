import React from "react";
import { SearchBoxProps } from "./SearchBoxProps";

export const SearchBox: React.FC<SearchBoxProps> = props => {
  return (
    <input
      onChange={e => props.onChange(e.target.value)}
      defaultValue={props.value}
    />
  );
};

export default SearchBox;
