import "./App.css";

import { Route, Routes } from "react-router-dom";
import {
  Bookmarks,
  Explore,
  Home,
  Landing,
  Login,
  Profile,
  SignUp,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <h1>MeowMents</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
