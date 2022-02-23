// const people = [
//   {
//     name: "Jane Cooper",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     role: "Admin",
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Arlene Mccoy",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     role: "Admin",
//     email: "arlene.mccoy@example.com",
//     image:
//       "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// ];

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_tickets } from "../../helpers";
import MyModal from "../MyModal";

export interface MyTableUsers {
  ticketName: string;
  name: string;
  title: string;
  comment: string;
  email?: string;
  role?: string;
  department?: string;
  avatar?: string;
  active: boolean;
}

export interface MyTableUsersProps {
  tabs?: MyTableUsers[];
  data: any;
  onClick?: any;
  button_text?: string;
  button_text1?: string;
  button_text2?: string;
  display_avatar: boolean;
  display_email: boolean;
  display_status: boolean;
  display_action: boolean;
  //   display_button: boolean;
}

const MyTable = (props: MyTableUsersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState<any>([]);

  const openModal_createTicket = () => {
    setIsOpen(true);
  };

  const closeModal_createTicket = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  // const openModal_editTicket = () => {
  //   setOpen(true);
  // };

  // const closeModal_editTicket = () => {
  //   setOpen(false);
  // };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ticket Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Comment
                  </th>

                  {props.display_status && (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:inline-grid"
                    >
                      Status
                    </th>
                  )}

                  {props.display_action && (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:inline-grid"
                    >
                      Action
                    </th>
                  )}
                  {/* <th
                    scope="col"
                    className="relative px-6 py-3 hidden sm:inline-grid"
                  >
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.data.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center ">
                        <td className=" py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.name}
                          </div>
                        </td>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.comment}
                      </div>
                    </td>

                    <td className=" py-4 whitespace-nowrap">
                      {props.display_status && (
                        <td className="px-6 py-4 whitespace-nowrap hidden sm:inline-grid">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>

                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Inactive
                          </span>
                        </td>
                      )}

                      {props.button_text && (
                        <td className=" cursor-pointer px-6 py-4 whitespace-nowrap text-right text-sm font-medium hidden sm:inline-grid">
                          <button
                            onClick={() => navigate(`edit_ticket/${item._id}`)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            {props.button_text}
                          </button>
                        </td>
                      )}

                      {props.button_text1 && (
                        <td className=" cursor-pointer px-6 py-4 whitespace-nowrap text-right text-sm font-medium hidden sm:inline-grid">
                          <button
                            onClick={props.onClick}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            {props.button_text1}
                          </button>
                        </td>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={openModal_createTicket}
              className="inline-flex px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo -700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {props.button_text2}
            </button>
          </div>

          {/* If modal_createTicket opended */}
          {isOpen ? (
            <MyModal
              text1="Create a ticket"
              heightScreen="h-full"
              widthFull="max-w-screen"
              buttonX={true}
              buttonX_close={() => closeModal_createTicket()}
              field={true}
              field1={true}
              button1_text="Create"
              button2_text="Cancel"
            />
          ) : (
            ""
          )}

          {/* If modal_editTicket opended */}
          {/* {open ? (
            <MyModal
              text1="Edit a ticket"
              heightScreen="h-full"
              widthFull="max-w-screen"
              buttonX={true}
              buttonX_close={() => closeModal_editTicket()}
              field={true}
              field1={true}
              button11_text="Edit"
              button2_text="Cancel"
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MyTable;
