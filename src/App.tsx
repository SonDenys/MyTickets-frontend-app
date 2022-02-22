import { useState } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup/index";
import Home from "./pages/Home";
import { userTokenState } from "./globalStates";
import { useRecoilState } from "recoil";

export default function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [idUser, setIdUser] = useState(Cookies.get("idUser") || null);

  const setUser = (token, idUser) => {
    // Create the cookie as token
    if (token) {
      setToken(token);
      Cookies.set("token", token, {
        expires: 3,
      });
      // Create the cookie as idUser
      if (idUser) {
        setIdUser(idUser);
        Cookies.set("idUser", idUser, {
          expires: 3,
        });
      }
    } else {
      setToken(null);
      setIdUser(null);
      Cookies.remove("token");
      Cookies.remove("idUser");
    }
  };

  const config_json = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("token app = = ==", token);

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/login"
          caseSensitive={false}
          element={<Login setUser={setUser} setUserId={setIdUser} />}
        />
        <Route
          path="/signup"
          caseSensitive={false}
          element={<Signup setUser={setUser} />}
        /> */}
        <Route
          path="/login"
          caseSensitive={false}
          element={<Login setUser={setUser} setIdUser={setIdUser} />}
        />
        <Route
          path="/signup"
          caseSensitive={false}
          element={<Signup setUser={setUser} />}
        />
        <Route
          path="/"
          element={
            token ? (
              <Home setUser={setUser} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
function setToken(token: any) {
  throw new Error("Function not implemented.");
}
