import React from "react";
import sneaker from "../assets/snkr1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  return (
    <div className="flex h-screen h-screen-ios flex-col bg-[#FAFAFA]">
      <div className="flex justify-between m-6">
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
        <h1 className="text-lg font-semibold uppercase">Detalle</h1>
        <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
      </div>
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <img
          className="w-full mb-3 px-2 brightness-110	mix-blend-multiply"
          src={sneaker}
        />
      </div>
    </div>
  );
}

export default Detail;
