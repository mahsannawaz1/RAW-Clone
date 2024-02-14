import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

interface Props {
  darkMode: { on: boolean; color: string };
  handleDarkMode: () => void;
}
const Navbar = ({ darkMode: { on, color }, handleDarkMode }: Props) => {
  return (
    <nav>
      <div className="row align-items-center">
        <div className="col-1">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M905.77 793.161H99.172c-35.017 0-63.4 28.383-63.4 63.396v4.884c0 35.015 28.383 63.397 63.4 63.397H905.77c35.014 0 63.391-28.383 63.391-63.397v-4.884c-0.001-35.013-28.378-63.396-63.391-63.396z"
              fill="#6277BA"
            />
            <path
              d="M786.812 373.441l-3.61-2.742c-27.948-21.226-67.743-15.777-88.9 12.172L415.283 751.612c-21.145 27.948-15.639 67.808 12.304 89.032l3.61 2.742c27.943 21.237 67.744 15.776 88.891-12.178l279.028-368.725c21.146-27.953 15.639-67.822-12.304-89.042z"
              fill="#F0D043"
            />
            <path
              d="M970.852 329.401c0 87.741-71.131 158.878-158.879 158.878-87.741 0-158.878-71.137-158.878-158.878 0-87.747 71.137-158.878 158.878-158.878 87.748 0 158.879 71.131 158.879 158.878z"
              fill="#E5594F"
            />
          </svg>
        </div>
        <div className="col-9 px-0">
          <div className="d-flex align-items-center rounded-pill search-div px-3 py-1">
            <CiSearch color="white" size={20} />
            <form action="" className="d-flex w-100 mx-2">
              <input
                type="text"
                className="flex-grow-1 p-1 search"
                placeholder="Search Games..."
              />
            </form>
          </div>
        </div>
        <div className="col-2">
          <div className="modes d-flex align-items-center">
            <button
              style={{ backgroundColor: color }}
              className="rounded-pill width-30 position-relative"
              onClick={handleDarkMode}
            >
              <div
                className="rounded-circle bg-blue position-absolute"
                style={on ? { right: "3px" } : { left: "3px" }}
              ></div>
            </button>
            <p className="m-0 ">Dark Mode</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
