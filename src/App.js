import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Bookmarks,
  EditForm,
  Explore,
  Feed,
  Header,
  Landing,
  Login,
  Profile,
  RequiresAuth,
  Route,
  Routes,
  SignUp,
  SinglePost,
  ToastContainer,
  usePost,
} from "./Pages";
import Mockman from "mockman-js";
import { useUtils } from "./Contexts/UtilsProvider";
import { useUsers } from "./Contexts/UsersProvider";
import { SuggestedUser } from "./Components/SuggestedUsers/Suggestion";
import { useNavigate } from "react-router-dom";
import { CommentBar } from "./Components/Comments/CommentBar";

function App() {
  const { editForm } = usePost();
  const { userDispatch, state } = useUsers();
  const { showSearchBar, setShowSearchBar, setShowCommentBar, showCommentBar } =
    useUtils();

  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <div>{editForm && <EditForm />}</div>
      <div> {showCommentBar && <CommentBar />}</div>
      <div>
        {showSearchBar && (
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
              <i class="fa-solid fa-magnifying-glass top-magnify"></i>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              {state?.searchVal?.length ? (
                state?.searchedUsers?.length ? (
                  <div className="center-parent">
                    {state?.searchedUsers?.map((user) => (
                      <div
                        className="center"
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
        )}
      </div>
      <Routes>
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Feed />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <Bookmarks />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <RequiresAuth>
              <SinglePost />
            </RequiresAuth>
          }
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
