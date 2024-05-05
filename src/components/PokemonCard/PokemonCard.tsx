import { Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";
// import React from "react";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

function PokemonCard({ image, name, id, types }: PokemonCardProps) {
  return (
    <div className="card-img-scale max-w-[275px] rounded-[20px] overflow-hidden shadow bg-gray-800 border-gray-700 p-[16px] m-auto">
      <div className="bg-[url('/images/poke-card-bg.png')] bg-center bg-cover rounded-[20px]">
        <Link to={`/detail/${name}`}>
          <img
            className="rounded-t-lg max-h-[218px] p-[40px] w-full min-w-[200px] aspect-[1/1]"
            src={image}
            alt=""
          />
        </Link>
      </div>

      <div className="pt-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-bold tracking-tight  text-white capitalize">{name}</h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white capitalize">#{id}</h5>
        </div>

        <div className="flex gap-2 justify-end mt-[16]">
          {types.map((type, index) => {
            return (
              <span
                key={`${name}-type-${index}`}
                className={`badge-type-${type.type.name} px-[14px] py-1 rounded-[15px] capitalize`}
              >
                {type.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
