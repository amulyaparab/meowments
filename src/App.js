import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Bookmarks,
  CommentBar,
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
  SearchBar,
  SignUp,
  SinglePost,
  ToastContainer,
  usePost,
  useUtils,
} from "./Pages";
import Mockman from "mockman-js";

function App() {
  const { editForm } = usePost();
  const { showSearchBar, showCommentBar } = useUtils();
  return (
    <div className="App">
      <Header />
      <div>{editForm && <EditForm />}</div>
      <div> {showCommentBar && <CommentBar />}</div>
      <div>{showSearchBar && <SearchBar />} </div>
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
