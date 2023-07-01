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

function App() {
  const { editForm } = usePost();
  const { showSearchBar, setShowSearchBar } = useUtils();
  return (
    <div className="App">
      <Header />
      <div>{editForm && <EditForm />}</div>
      <div>
        {showSearchBar && (
          <div className="overlay">
            <div className="search-parent">
              <input className="top" />
              <i class="fa-solid fa-magnifying-glass top-magnify"></i>
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
