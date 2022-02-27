import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyModal from "../../components/MyModal";

const UpdateTicketStatus = ({
  select_statusDone,
  select_statusNotStarted,
  select_statusStuck,
  select_statusWorkingOnIt,
}) => {
  const navigate = useNavigate();

  return (
    <MyModal
      text1="Select your ticket status"
      heightScreen="h-full"
      widthFull="max-w-screen"
      buttonX={true}
      buttonX_close={() => navigate("/")}
      field={false}
      field1={false}
      button_status={true}
      onClick_statusDone={select_statusDone}
      onClick_statusWorkingOnIt={select_statusWorkingOnIt}
      onClick_statusStuck={select_statusStuck}
      onClick_statusNotStarted={select_statusNotStarted}
    />
  );
};

export default UpdateTicketStatus;
