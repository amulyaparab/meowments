import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import {
  Bookmarks,
  Explore,
  Feed,
  Landing,
  Login,
  Profile,
  SignUp,
} from "./Pages";
import { Header } from "./Components/Header/Header";
import { RequiresAuth } from "./Components/RequireAuth";
import Mockman from "mockman-js";
import { SinglePost } from "./Pages/SinglePost";
import { usePost } from "./Contexts/PostsProvider";
import { Loader } from "./Components/Loader";

function App() {
  const { state } = usePost();
  return (
    <div className="App">
      <Header />
      {/* {state.loading && <Loader />} */}
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
