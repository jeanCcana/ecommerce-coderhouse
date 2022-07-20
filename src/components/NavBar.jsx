import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTags,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

function NavBar() {
  return (
    <div className="flex justify-around border-t p-3 bg-white">
      <FontAwesomeIcon icon={faHouse} className="text-xl" />
      <FontAwesomeIcon icon={faTags} className="text-xl text-gray-400" />
      <FontAwesomeIcon icon={faBagShopping} className="text-xl text-gray-400" />
      <FontAwesomeIcon icon={faUser} className="text-xl text-gray-400" />
    </div>
  );
}

export default NavBar;
