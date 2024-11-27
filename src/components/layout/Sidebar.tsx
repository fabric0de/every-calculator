import { FaHome } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 right-0 z-40 w-3/5 sm:w-64 h-screen pt-16 transition-transform  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 pt-4 overflow-y-auto border-l-2 border-gray-300 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

              <span className="ms-3">Home</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
