import { useState } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup/index";
import Home from "./pages/Home";
import { userTokenState } from "./globalStates";
import { useRecoilState } from "recoil";
import EditTicket from "./pages/EditTicket";
import DeleteTicket from "./pages/DeleteTicket";
import UpdateTicketStatus from "./pages/UpdateTicketStatus";

export default function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [idUser, setIdUser] = useState(Cookies.get("idUser") || null);
  const [statusDone, setStatusDone] = useState(false);
  const [statusWorkingOnIt, setStatusWorkingOnIt] = useState(false);
  const [statusStuck, setStatusStuck] = useState(false);
  const [statusNotStarted, setStatusNotStarted] = useState(true);

  const setUser = (token, idUser) => {
    if (!token) {
      setToken(null);
      setIdUser(null);
      Cookies.remove("token");
      Cookies.remove("idUser");
      return;
    }
    // Create the cookie as token
    setToken(token);
    Cookies.set("token", token, {
      expires: 3,
    });
    if (!idUser) {
      return;
    }
    // Create the cookie as idUser
    setIdUser(idUser);
    Cookies.set("idUser", idUser, {
      expires: 3,
    });
  };

  const config_json = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("token app = = ==", token);

  const select_statusDone = () => {
    setStatusDone(true);
    setStatusNotStarted(false);
    setStatusStuck(false);
    setStatusWorkingOnIt(false);
  };

  const select_statusNotStarted = () => {
    setStatusDone(false);
    setStatusNotStarted(true);
    setStatusStuck(false);
    setStatusWorkingOnIt(false);
  };

  const select_statusStuck = () => {
    setStatusDone(false);
    setStatusNotStarted(false);
    setStatusStuck(true);
    setStatusWorkingOnIt(false);
  };

  const select_statusWorkingOnIt = () => {
    setStatusDone(false);
    setStatusNotStarted(false);
    setStatusStuck(false);
    setStatusWorkingOnIt(true);
  };

  return (
    <Router>
      <Routes>
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
              <Home
                setUser={setUser}
                statusDone={statusDone}
                statusNotStarted={statusNotStarted}
                statusStuck={statusStuck}
                statusWorkingOnIt={statusWorkingOnIt}
              />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/edit_ticket/:ticket_id"
          element={token ? <EditTicket /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/delete_ticket/:ticket_id"
          element={token ? <DeleteTicket /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/update_ticket_status/:ticket_id"
          element={
            token ? (
              <UpdateTicketStatus
                select_statusDone={select_statusDone}
                select_statusNotStarted={select_statusNotStarted}
                select_statusStuck={select_statusStuck}
                select_statusWorkingOnIt={select_statusWorkingOnIt}
              />
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
