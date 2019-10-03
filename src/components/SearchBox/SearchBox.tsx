import React from "react";
import { SearchBoxProps } from "./SearchBoxProps";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #ffffff20;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  max-width: 20em;
  color: #fff;
  padding-left: 1em;
  margin: 0 auto;
`;
StyledInput.displayName = "StyledInput";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const SearchBox: React.FC<SearchBoxProps> = props => {
  return (
    <Wrapper>
      <StyledInput
        onChange={e => props.onChange(e.target.value)}
        defaultValue={props.value}
        placeholder="Search"
        type="search"
        aria-label="Search list of characters"
      />
    </Wrapper>
  );
};

export default SearchBox;
