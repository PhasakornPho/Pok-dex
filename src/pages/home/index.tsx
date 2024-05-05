// import React, { useEffect } from "react";
import PokemonCard from "@/components/PokemonCard";
import SearchForm from "@/components/SearForm/index";
import { usePokemonListStore } from "@/store/pokemonList";
import ReactLoading from "react-loading";

const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();

  return (
    <div className="h-[100vh] w-[90%] m-auto max-w-[1100px] flex flex-col gap-5">
      <div
      //  className="sticky top-0 z-50"
      >
        <div className="flex justify-center relative">
          <img
            src="/images/logo.webp"
            alt=""
            className="max-h-[80px] mt-[20px]"
          />
        </div>
        <SearchForm />
      </div>
      {fetchPokemon.loading && (
        <div className="flex-1 flex justify-center items-center pb-[100px]">
          <ReactLoading
            type="spin"
            color="#fff"
          />
        </div>
      )}

      {!fetchPokemon.loading && (
        <div className="flex-1 mt2 ml-1 p-2 w-[100%] max-w-[1100px] overflow-y-scroll scrollbar">
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[20px] justify-center">
            {pokemon.data?.map((item, index) => {
              return (
                <PokemonCard
                  key={`PokemonCard-id-${index}`}
                  image={item.image || ""}
                  name={item.name}
                  id={item.id}
                  types={item.types}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
