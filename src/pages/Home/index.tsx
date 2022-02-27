import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MyTable from "../../components/MyTable";
import SearchBox from "../../components/SearchBox";
import { get_tickets } from "../../helpers";
import { BACKEND_URL } from "../../params";

const Home = ({
  setUser,
  statusDone,
  statusNotStarted,
  statusStuck,
  statusWorkingOnIt,
}) => {
  // Il faut utiliser deux listes.
  // Il y a une liste qui va servir de liste par défaut (ticketsList) et une autre qui sera alimentés par la barre de recherche (searchTicketsList)
  // ticketsList: Une liste pour l'ensemble des tickets retournés par l'api
  // searchTicketsList: Une liste qui va servir pour le filtre de la recherche
  const [ticketsList, setTicketsList] = useState<any>([]);
  const [searchTicketsList, setSearchTicketsList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await fetchTickets();
    })();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await get_tickets();
      setSearchTicketsList(response);
      setTicketsList(response);
      console.log("response get_ticket", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchTickets = (text) => {
    return ticketsList.filter((ticket) => {
      const ticketName = ticket.name.toLowerCase();

      // On utilise une expression regulière qui indique qu'on recherche un text qui doit matcher le début de ticket.name
      const regex = new RegExp("^" + text, "i");

      // Si y a match on retourne l'élément qui matche sinon on retourne tout le tableau
      return regex.test(ticketName);
    });
  };

  const onSearch = (text: string) => {
    // Récupérer dans la liste ticketsList la valeur qui correspond  à ce qui est entrée dans la barre de recherche

    const newTicketsList = searchTickets(text.toLowerCase());
    if (newTicketsList.length <= 0) {
      setSearchTicketsList(ticketsList);
      return;
    }
    setSearchTicketsList(newTicketsList);
  };

  return (
    <>
      <Header setUser={setUser} />
      <SearchBox handleSearch={onSearch} />
      <MyTable
        data={searchTicketsList}
        button_text="Edit"
        button_text1="Delete"
        button_text2="Create"
        display_avatar={false}
        display_email={false}
        display_action={true}
        display_status={true}
        display_statusDone={statusDone}
        display_statusNotStarted={statusNotStarted}
        display_statusStuck={statusStuck}
        display_statusWorkingOnIt={statusWorkingOnIt}
      />
    </>
  );
};

export default Home;
