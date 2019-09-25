import React from "react";
import styled from "styled-components";

export interface LoadMoreButtonStateProps {
  hidden: boolean;
}

export interface LoadMoreButtonDispatchProps {
  onClick: () => void;
}

export interface LoadMoreButtonProps
  extends LoadMoreButtonStateProps,
    LoadMoreButtonDispatchProps {}

const Wrapper = styled.div`
  margin: 2em auto;
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
`;

const Button = styled.button`
  font-size: 24px;
`;
Button.displayName = "StyledButton";

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = props => {
  return (
    <Wrapper>
      <Button hidden={props.hidden} onClick={props.onClick}>
        Load More
      </Button>
    </Wrapper>
  );
};
