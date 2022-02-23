import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MyTable from "../../components/MyTable";
import SearchBox from "../../components/SearchBox";
import { get_tickets } from "../../helpers";
import { BACKEND_URL } from "../../params";

const Home = ({ setUser }) => {
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await get_tickets();
        setData(response);
        console.log("response get_ticket", response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header setUser={setUser} />
      <SearchBox setSearch={setSearch} />
      <MyTable
        data={data}
        button_text="Edit"
        button_text1="Delete"
        button_text2="Create"
        display_avatar={false}
        display_email={false}
        display_action={true}
        display_status={true}
      />
    </>
  );
};

export default Home;
