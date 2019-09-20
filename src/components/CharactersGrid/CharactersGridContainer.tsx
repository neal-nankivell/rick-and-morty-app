import { ApplicationState } from "../../redux/ApplicationState";
import CharactersGridProps from "./CharactersGridProps";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import CharactersGrid from "./CharactersGrid";

export const mapStateToProps: (
  state: ApplicationState
) => CharactersGridProps = (state: ApplicationState) => {
  return { characters: state.characters };
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersGrid);
