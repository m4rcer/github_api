import { ReposState, ReposAction, ReposActionTypes } from "../../types/repos";

const initialState: ReposState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  isFetchError: false,
};

export const reposReducer = (
  state: ReposState = initialState,
  action: ReposAction
): ReposState => {
  switch (action.type) {
    case ReposActionTypes.SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    case ReposActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ReposActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ReposActionTypes.SET_IS_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
};

export const setRepos = (repos: any): ReposAction => ({
  type: ReposActionTypes.SET_REPOS,
  payload: repos,
});
export const setIsFetching = (bool: boolean): ReposAction => ({
  type: ReposActionTypes.SET_IS_FETCHING,
  payload: bool,
});
export const setCurrentPage = (page: number): ReposAction => ({
  type: ReposActionTypes.SET_CURRENT_PAGE,
  payload: page,
});
export const setIsFetchError = (bool: boolean): ReposAction => ({
  type: ReposActionTypes.SET_IS_FETCH_ERROR,
  payload: bool,
});
