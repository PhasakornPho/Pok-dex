// import React from "react";

import NotFound from "@/components/NotFound";
import PokemonDetail from "@/components/PokemonDetail";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailService } from "@/services";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";

type pokemonType = {
  data: IPokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailService.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data) {
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
      }
    } else {
      setPokemon({ data: undefined, loading: false, error: response.status });
    }
  };

  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  return (
    <div>
      {pokemon.loading ? (
        <div className="relative flex-1 flex justify-center items-center h-[100vh] pb-[100px]">
          <ReactLoading
            type="spin"
            color="#fff"
          />
        </div>
      ) : pokemon.data ? (
        <PokemonDetail data={pokemon.data} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default DetailPage;
