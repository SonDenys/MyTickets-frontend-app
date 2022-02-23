import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../../components/MyModal";

const EditTicket = () => {
  const navigate = useNavigate();

  return (
    <MyModal
      text1="Edit a ticket"
      heightScreen="h-full"
      widthFull="max-w-screen"
      buttonX={true}
      buttonX_close={() => navigate("/")}
      field={true}
      field1={true}
      button11_text="Edit"
      button2_text="Cancel"
    />
  );
};

export default EditTicket;
