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
      <div className="flex-1 overflow-y-auto">
        <div className="px-7 py-4 shadow-lg rounded-3xl">
          <img
            className="w-full mb-3 px-6 brightness-110	mix-blend-multiply"
            src={sneaker}
          />
          <div className="flex">
            <div className="flex-1 mr-4">
              <span className="font-bold uppercase text-xs block">Jordan</span>
              <span className="uppercase font-semibold text-2xl block">
                Jordan 1 Retro High OG
              </span>
              <span className="block">S/.1000</span>
            </div>
            <div>
              <span className="py-1 px-2 rounded-md bg-black text-white text-sm">
                Nuevo
              </span>
            </div>
          </div>
        </div>
        <div className="px-7 pt-8">
          <span>Tamaño-Hombres</span>
          <div className="flex gap-4 mt-4 mb-8 justify-center">
            {[38, 39, 40, 41, 42, 43].map((size) => (
              <span className="px-3 py-2  border rounded-md ">{size}</span>
            ))}
          </div>
          <span className="mb-2 block font-semibold">Descripción</span>
          <p className="font-light text-gray-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, in sunt
            facere dolorum similique nesciunt laborum atque veniam reiciendis
            expedita asperiores libero tempora dolorem eius quasi deleniti,
            molestiae nemo quos!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
