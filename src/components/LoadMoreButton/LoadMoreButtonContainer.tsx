import { ApplicationState } from "../../redux/ApplicationState";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { loadMore } from "../../redux/actions";
import {
  LoadMoreButtonStateProps,
  LoadMoreButtonDispatchProps,
  LoadMoreButton
} from "./LoadMoreButton";

export const mapStateToProps: (
  state: ApplicationState
) => LoadMoreButtonStateProps = (state: ApplicationState) => ({
  hidden: state.nextPageUrl === undefined || state.nextPageUrl === ""
});

export const mapDispatchToProps: (
  dispatch: Dispatch
) => LoadMoreButtonDispatchProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(loadMore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMoreButton);
