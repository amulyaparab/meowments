import "./App.css";

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
function App() {
  return (
    <div className="App">
      <Header />
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
          path="/feed"
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
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />

        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
