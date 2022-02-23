import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../../components/MyModal";

const DeleteTicket = () => {
  const navigate = useNavigate();

  return (
    <MyModal
      text1="Are you sure to delete this ticket?"
      heightScreen="h-full"
      widthFull="max-w-screen"
      buttonX={true}
      buttonX_close={() => navigate("/")}
      field={false}
      field1={false}
      button111_text="Delete"
      button2_text="Cancel"
    />
  );
};

export default DeleteTicket;
