import { useModal } from "@saimin/react-modal-manager";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar({ handleSearch, setDarkMode, darkMode }) {
  const [query, setQuery] = useState("");
  const { open ,close} = useModal();

  // for menu open and close

  const closeMyModal = () => {
    close('0001');
  };
  const openMyModal = () => {
    open("0001", {
      content: <Menu setDarkMode={setDarkMode} darkMode={darkMode} closeMyModal={closeMyModal}></Menu>,
      backdropOpacity: 0.3,
      fullscreen: false,
      position: "top-right",
      hideOnClickBackDrop: true,
      animationType: "slide-from-right",
    });
  };
  
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Metflix</h1>
      </div>
      {
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) =>setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(query);
            }
          }}
        />
      }
      <p className="num-results">
        <i className="fa-solid fa-bars" style={{cursor : 'pointer'}}  onClick={openMyModal}></i>
      </p>
    </nav>
  );
}
