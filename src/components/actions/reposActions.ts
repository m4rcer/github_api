import axios from "axios";
import React, { Dispatch } from "react";
import { AnyAction } from "redux";
import { setIsFetchError, setIsFetching, setRepos } from "../../store/reducers/reposReducer";

export const getRepos = (searchQuery: string = "stars:%3E1", currentPage:number, perPage: number) => {
  if (searchQuery == "") {
    searchQuery = "stars:%3E1"; 
  }
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setIsFetching(true));
    const responce = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
    );
    dispatch(setRepos(responce.data));
    }
    catch (e){
      dispatch(setIsFetchError(true));
      dispatch(setIsFetching(false));
    }
  };
};

export const getCurrentRepo = async (username:string | undefined, reponame:string | undefined, setRepo:React.Dispatch<React.SetStateAction<object>>) => {
  const responce = await axios.get(`https://api.github.com/repos/${username}/${reponame}`);
  setRepo(responce.data);
};

export const getContributors = async (username:string | undefined, reponame:string | undefined, setContributors:React.Dispatch<React.SetStateAction<object>>) => {
  const responce = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`);
  setContributors(responce.data);
};
