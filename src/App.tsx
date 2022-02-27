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
import EditTicket from "./pages/EditTicket";
import DeleteTicket from "./pages/DeleteTicket";
import UpdateTicketStatus from "./pages/UpdateTicketStatus";

export default function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [idUser, setIdUser] = useState(Cookies.get("idUser") || null);

  // The status of the tickets with states
  const [statusDone, setStatusDone] = useState(false);
  const [statusWorkingOnIt, setStatusWorkingOnIt] = useState(false);
  const [statusStuck, setStatusStuck] = useState(false);
  const [statusNotStarted, setStatusNotStarted] = useState(true);

  // We call the function setUser when we signup, login or logout in order to create the cookie as token
  // Then this cookie 'token' will be used as an authenticator to access to the application
  const setUser = (token, idUser) => {
    if (!token) {
      setToken(null);
      setIdUser(null);
      Cookies.remove("token");
      Cookies.remove("idUser");
      return;
    }
    // We set the token
    // and we create the cookie as token
    setToken(token);
    Cookies.set("token", token, {
      expires: 3,
    });
    if (!idUser) {
      return;
    }
    // We set the token
    // and we create the cookie as idUser
    setIdUser(idUser);
    Cookies.set("idUser", idUser, {
      expires: 3,
    });
  };

  // When we select a status, the others status become false and won't be displayed
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
