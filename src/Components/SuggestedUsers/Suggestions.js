import "./suggestions.css";
import { FollowButton, SuggestedUser } from "..";
import { useAuth, usePost, useUsers, useUtils } from "../../Contexts";

export const Suggestions = () => {
  const { state, userDispatch } = useUsers();
  const { currentUser } = useAuth();
  const { setEditForm } = usePost();
  const { isDarkMode } = useUtils();

  return (
    <div className="followers followers-tab" id={`${isDarkMode && "dark"}`}>
      <div className="search-parent">
        <input
          className="searchBar"
          value={state?.searchVal}
          onChange={(event) =>
            userDispatch({ type: "SEARCH_USER", payload: event.target.value })
          }
        />
        <i class="fa-solid fa-magnifying-glass magnify"></i>
      </div>
      <div>
        {state?.searchVal?.length ? (
          state?.searchedUsers?.length ? (
            <div>
              {state?.searchedUsers?.map((user) => (
                <div
                  className="center"
                  onClick={() => userDispatch({ type: "CLEAR_SEARCH" })}
                >
                  <SuggestedUser {...user} showUserName dark />
                </div>
              ))}
            </div>
          ) : (
            <p>No Users Found</p>
          )
        ) : null}
      </div>
      <h3>Suggested Users</h3>
      <div className="suggestions">
        {state?.users?.map((user) =>
          user.username === currentUser.username ? null : (
            <div className="one-user">
              <SuggestedUser {...user} showUserName dark />
              <FollowButton user={user} />
            </div>
          )
        )}
      </div>
      <i
        class="fa-solid fa-circle-plus circle-plus"
        onClick={() => setEditForm(true)}
      ></i>
    </div>
  );
};
