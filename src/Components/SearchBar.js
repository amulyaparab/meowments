import { useNavigate } from "react-router-dom";
import { SuggestedUser } from "../Components";
import { useUsers, useUtils } from "../Contexts";

export const SearchBar = () => {
  const { userDispatch, state } = useUsers();
  const { setShowSearchBar } = useUtils();
  const navigate = useNavigate();

  return (
    <div
      className="overlay"
      onClick={(e) => {
        e.stopPropagation();
        setShowSearchBar(false);
      }}
    >
      <div className="search-parent" onClick={(e) => e.stopPropagation()}>
        <input
          className="top"
          onChange={(event) =>
            userDispatch({
              type: "SEARCH_USER_NAV",
              payload: event.target.value,
            })
          }
        />
        <i className="fa-solid fa-magnifying-glass top-magnify"></i>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        {state?.searchVal?.length ? (
          state?.searchedUsers?.length ? (
            <div className="center-parent">
              {state?.searchedUsers?.map((user) => (
                <div
                  key={user._id}
                  className="center center-background"
                  onClick={() => {
                    navigate(`profile/${user._id}`);
                    setShowSearchBar(false);
                    userDispatch({ type: "CLEAR_SEARCH" });
                  }}
                >
                  <SuggestedUser {...user} showUserName />
                </div>
              ))}
            </div>
          ) : (
            <p className="center">No Users Found</p>
          )
        ) : null}
      </div>
    </div>
  );
};
