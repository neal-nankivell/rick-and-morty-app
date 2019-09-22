import { ApplicationState } from "../../redux/ApplicationState";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import SearchBox from "./SearchBox";
import { SearchBoxStateProps, SearchBoxDispatchProps } from "./SearchBoxProps";
import { newFilter } from "../../redux/actions";

export const mapStateToProps: (
  state: ApplicationState
) => SearchBoxStateProps = (state: ApplicationState) => ({
  value: state.filterString
});

export const mapDispatchToProps: (
  dispatch: Dispatch
) => SearchBoxDispatchProps = (dispatch: Dispatch) => ({
  onChange: newValue => dispatch(newFilter(newValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
