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

function App() {
  const { editForm } = usePost();
  return (
    <div className="App">
      <Header />
      <div>{editForm && <EditForm />}</div>
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
