import { mapStateToProps, mapDispatchToProps } from "./LoadMoreButtonContainer";
import initialState from "../../redux/initialState";
import { loadMore } from "../../redux/actions";

describe("LoadMoreButtonContsiner", () => {
  it("is hidden when next page url is undefined", () => {
    var sut = mapStateToProps;

    var result = sut({ ...initialState, nextPageUrl: undefined });

    expect(result.hidden).toBeTruthy();
  });

  it("is hidden when nextPageUrl is an empty string", () => {
    var sut = mapStateToProps;

    var result = sut({ ...initialState, nextPageUrl: "" });

    expect(result.hidden).toBeTruthy();
  });

  it("is shown when nextPageUrl is populated", () => {
    var sut = mapStateToProps;

    var result = sut({ ...initialState, nextPageUrl: "some.fake.url" });

    expect(result.hidden).toBeFalsy();
  });

  it("onClick is mapped to dispatch load more", () => {
    let mockDispatch = jest.fn().mockName("dispatch mock");
    var sut = mapDispatchToProps;

    sut(mockDispatch).onClick();

    expect(mockDispatch.mock.calls[0][0]).toEqual(loadMore());
  });
});
