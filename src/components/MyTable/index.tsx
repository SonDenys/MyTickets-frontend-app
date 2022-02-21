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
  tabs: MyTableUsers[];
  onClick?: any;
  button_text?: string;
  display_avatar: boolean;
  display_email: boolean;
  display_status: boolean;
  display_role: boolean;
  //   display_button: boolean;
}

const MyTable = (props: MyTableUsersProps) => {
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
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Comment
                  </th>

                  {props.display_role && (
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
                {props.tabs.map((item) => (
                  <tr key={item.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center ">
                        <td className=" py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.ticketName}
                          </div>
                        </td>
                      </div>
                    </td>

                    <div className="items-center">
                      <td className="px-6 py-4 whitespace-nowrap flex">
                        {props.display_avatar && (
                          <div className="hidden sm:inline-grid">
                            <div className="flex-shrink-0 h-10 w-10">
                              {item.avatar && (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={item.avatar}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                        )}

                        <div className="sm:ml-4 ml-0 ">
                          <div
                            className=" text-sm font-medium text-gray-900 "
                            onClick={props.onClick}
                          >
                            {item.name}
                          </div>
                          {props.display_email && (
                            <div className="hidden sm:inline-grid">
                              {item.email && (
                                <div className="text-sm text-gray-500">
                                  {item.email}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                    </div>

                    {/* {props.display_role && (
                      <div className="hidden sm:inline-grid">
                        {item.role && (
                          <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                            {item.role}
                          </td>
                        )}
                      </div>
                    )} */}

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.comment}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {props.display_status && (
                        <td className="px-6 py-4 whitespace-nowrap hidden sm:inline-grid">
                          {item.active && (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          )}
                          {!item.active && (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Inactive
                            </span>
                          )}
                        </td>
                      )}

                      {props.button_text && (
                        <td className=" py-4 whitespace-nowrap text-right text-sm font-medium hidden sm:inline-grid">
                          <a
                            onClick={props.onClick}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            {props.button_text}
                          </a>
                        </td>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTable;