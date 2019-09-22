export interface SearchBoxStateProps {
  value: string;
}

export interface SearchBoxDispatchProps {
  onChange: (newValue: string) => void;
}

export interface SearchBoxProps
  extends SearchBoxStateProps,
    SearchBoxDispatchProps {}
