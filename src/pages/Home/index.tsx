import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MyTable from "../../components/MyTable";
import SearchBox from "../../components/SearchBox";
import { get_tickets } from "../../helpers";
import { BACKEND_URL } from "../../params";
import SpinningBubbles from "react-loading";

const Home = ({
  setUser,
  statusDone,
  statusNotStarted,
  statusStuck,
  statusWorkingOnIt,
}) => {
  const [isLoading, setIsLoading] = useState(true);

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
      // 1e Liste par défaut
      setTicketsList(response);
      // 2e Liste alimentés par la barre de recherche
      setSearchTicketsList(response);
      // Met fin à l'écran de chargement
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchTickets = (text: string) => {
    return ticketsList.filter((ticket) => {
      const ticketName = ticket.name.toLowerCase();

      // On utilise une expression regulière qui indique qu'on recherche un text qui doit matcher avec le début de ticket.name
      const regex = new RegExp("^" + text, "i");

      // On retourne l'élément qui match
      return regex.test(ticketName);
    });
  };

  const onSearch = (text: string) => {
    // Récupérer dans la liste ticketsList la valeur qui correspond à ce qui est entrée dans la barre de recherche

    const newTicketsList = searchTickets(text);
    // S'il n'y a pas de rechercher, on retourne tout le tableau
    if (newTicketsList.length <= 0) {
      setSearchTicketsList(ticketsList);
      return;
    }
    // Sinon on retourne la nouvelle liste recherchée
    setSearchTicketsList(newTicketsList);
  };

  return isLoading ? (
    <div className="flex justify-center items-center mt-72">
      <SpinningBubbles color="#80ADA0" />
    </div>
  ) : (
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
