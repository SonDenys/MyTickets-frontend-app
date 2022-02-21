import { useNavigate } from "react-router-dom";

const Header = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null, null);
    navigate("/login");
  };

  return (
    <header className="bg-teal-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a>
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <button
              onClick={() => handleLogOut()}
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
