import React from "react";
import { SearchBoxProps } from "./SearchBoxProps";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #ffffff20;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 20em;
  max-width: 600px;
  color: #fff;
  padding-left: 1em;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
`;

export const SearchBox: React.FC<SearchBoxProps> = props => {
  return (
    <Wrapper>
      <StyledInput
        onChange={e => props.onChange(e.target.value)}
        defaultValue={props.value}
        placeholder="Search"
      />
    </Wrapper>
  );
};

export default SearchBox;
