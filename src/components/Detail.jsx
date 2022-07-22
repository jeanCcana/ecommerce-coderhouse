import React, { useState } from "react";
import sneaker from "../assets/snkr1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [isfavorite, setIsFavorite] = useState(true);
  const [size, setSize] = useState(40);

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
              <span className="py-1 px-3 rounded-md bg-black text-white text-xs">
                Nuevo
              </span>
            </div>
          </div>
        </div>
        <div className="px-7 pt-8">
          <div className="flex justify-between items-baseline">
            <span>Tamaño-Hombres (us)</span>
            <span className="text-gray-400 underline italic text-sm">
              Ver gráfico
            </span>
          </div>
          <div className="flex gap-4 mt-4 mb-8 justify-center">
            {[38, 39, 40, 41, 42, 43].map((value) => (
              <span
                onClick={() => setSize(value)}
                className={`cursor-pointer px-3 py-2 border rounded-md ${
                  size === value && "bg-black text-white"
                }`}
              >
                {value}
              </span>
            ))}
          </div>
          <span className="mb-2 block font-semibold">Descripción</span>
          <p className="font-light text-gray-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, in sunt
            facere dolorum similique nesciunt laborum atque veniam reiciendis
            expedita asperiores libero tempora dolorem eius quasi deleniti,
            molestiae nemo quos!
          </p>
          <div className="flex gap-4 py-10">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setIsFavorite(!isfavorite)}
              className={`cursor-pointer p-3 bg-white shadow-md rounded-md text-xl ${
                isfavorite ? "text-red-500" : "text-gray-400"
              }`}
            />
            <button className="flex-1 bg-black text-white shadow-md rounded-md">
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
