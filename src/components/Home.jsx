import React from "react";
import Logo from "../assets/snkr_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";

function Home() {
  return (
    <div className="flex flex-col max-h-full">
      <div className="flex justify-center m-6">
        <img src={Logo} className="w-[4.5rem]" />
      </div>
      <div className="flex mx-8 mb-2">
        <div className=" space-x-6 flex-1">
          <span className="text-gray-400 font-semibold">Destacados</span>
          <span className="font-semibold underline">Nuevos</span>
        </div>
        <FontAwesomeIcon icon={faSearch} className="text-xl" />
      </div>

      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(min(100%,9.46rem),1fr))] gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <CardItem />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
