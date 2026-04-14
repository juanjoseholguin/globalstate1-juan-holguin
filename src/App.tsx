import "./App.css";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { UserProvider } from "./context/UserContext";
import { MoviesProvider } from "./context/MoviesContext";
import { Catalogue } from "./pages/Catalogue/Catalogue";
import { Saved } from "./pages/Saved/Saved";

function App() {
  return (
    <UserProvider>
      <MoviesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </MoviesProvider>
    </UserProvider>
  );
}

export default App
