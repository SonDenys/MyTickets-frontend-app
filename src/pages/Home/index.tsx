import Header from "../../components/Header";
import MyTable from "../../components/MyTable";

const Home = ({ setUser }) => {
  return (
    <>
      <Header setUser={setUser} />
      <MyTable
        tabs={[
          {
            ticketName: "First Ticket",
            name: "Jane Cooper",
            title: "Regional Paradigm Technician",
            comment: "Commentaire numéro 1",
            department: "Optimization",
            role: "Admin",
            email: "jane.cooper@example.com",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            active: true,
          },
          {
            ticketName: "2nd Ticket",
            name: "Arlene Mccoy",
            title: "Regional Paradigm Technician",
            comment: "Commentaire numéro 2",
            department: "Optimization",
            role: "Admin",
            email: "arlene.mccoy@example.com",
            avatar:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            active: false,
          },
        ]}
        button_text="Hello"
        display_avatar={true}
        display_email={true}
        display_role={true}
        display_status={true}
      />
    </>
  );
};

export default Home;
