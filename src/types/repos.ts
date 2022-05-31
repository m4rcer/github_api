export interface ReposState {
    items: any[],
    isFetching: boolean,
    currentPage: number,
    perPage: number,
    totalCount: number,
    isFetchError: boolean
}

export enum ReposActionTypes {
    SET_REPOS = "SET_REPOS",
    SET_IS_FETCHING = "SET_IS_FETCHING",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_IS_FETCH_ERROR = "SET_IS_FETCH_ERROR",
}

interface SetReposAction {
    type: ReposActionTypes.SET_REPOS,
    payload: any
}

interface SetIsFetchingAction {
    type: ReposActionTypes.SET_IS_FETCHING,
    payload: boolean
}

interface SetCurrentPage {
    type: ReposActionTypes.SET_CURRENT_PAGE,
    payload: number
}

interface SetIsFetchError {
    type: ReposActionTypes.SET_IS_FETCH_ERROR,
    payload: boolean
}

export type ReposAction = SetReposAction | SetIsFetchingAction | SetCurrentPage | SetIsFetchError;