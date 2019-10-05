import { mapStateToProps, mapDispatchToProps } from "./SearchBoxContainer";
import initialState from "../../redux/initialState";
import { newFilter } from "../../redux/actions";

describe("SearchBoxContsiner", () => {
  it("value is mapped from filter string", () => {
    var sut = mapStateToProps;
    var input = "Some Filter String";

    var result = sut({ ...initialState, filterString: input });

    expect(result.value).toEqual(input);
  });

  it("onChange is mapped to dispatch new filter", () => {
    let mockDispatch = jest.fn().mockName("dispatch mock");
    var sut = mapDispatchToProps;

    sut(mockDispatch).onChange("New Value");

    expect(mockDispatch.mock.calls[0][0]).toEqual(newFilter("New Value"));
  });
});
