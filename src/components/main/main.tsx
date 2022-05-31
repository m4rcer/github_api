import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getRepos } from "../actions/reposActions";
import Repo from "../repo/repo";
import { setCurrentPage } from "../../store/reducers/reposReducer";
import "./main.css";
import createPages from "../../utils/pagesCreator";
import { Navigate } from "react-router-dom";

export interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const repos = useTypedSelector((state) => state.repos.items);
  const isFetching = useTypedSelector((state) => state.repos.isFetching);
  const currentPage = useTypedSelector((state) => state.repos.currentPage);
  const perPage = useTypedSelector((state) => state.repos.perPage);
  const totalCount = useTypedSelector((state) => state.repos.totalCount);
  const isFetchError = useTypedSelector((state) => state.repos.isFetchError);
  const [searchValue, setSearchValue] = useState<string>("");

  const pagesCount = Math.ceil(totalCount/perPage);

  const pages: number[] = [];
  createPages(pages, pagesCount, currentPage);
  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  if(isFetchError){
      return <Navigate to={"/error"}/>
  }

  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-button" onClick={() => searchHandler()}>
          Search
        </button>
      </div>
      {isFetching === false ? (
        repos.map((repo) => <Repo key={repo.name} repo={repo} />)
      ) : (
        <div className="fetching"></div>
      )}

      <div className="pages">
        {pages.map((page, index) => (
          <span
            key={index}
            className={currentPage == page ? "current-page" : "page"}
            onClick={()=>dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Main;
