import React from "react";
import sneaker from "../assets/snkr1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function CardItem() {
  return (
    <div className="bg-white flex flex-col items-center px-2 py-2 rounded-xl shadow-sm text-center">
      <div className="p-1.5 rounded-full shadow-md self-end bg-white mb-1 flex justify-center items-center">
        <FontAwesomeIcon icon={faHeart} className=" text-gray-400" />
      </div>
      <img className="w-full mb-3 px-2" src={sneaker} />
      <span className="font-bold uppercase text-xs">Jordan</span>
      <span className="uppercase font-medium text-xs">
        Jordan 1 Retro High OG
      </span>
      <span className="text-xs">S/.1000</span>
    </div>
  );
}

export default CardItem;
