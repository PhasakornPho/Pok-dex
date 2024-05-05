import { useEffect } from "react";
import { pokemonListService, pokemonDetailService } from "@/services/";
import { usePokemonListStore } from "@/store/pokemonList";
import { useForm } from "react-hook-form";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { generationList } from "@/utils/optionList";

const useSearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const { setFetchPokemonList, fetchPokemon, setPokemonList } = usePokemonListStore();
  const keyword = watch("keyword");
  const generation = watch("generation");
  const type = watch("type");
  const sort = watch("sort");
  const onSubmit = () => console.log("Submit");

  const callData = async (filter?: { name: string; limit: number; offset: number }) => {
    setFetchPokemonList({ data: [], loading: true, error: null });
    const responseList = await pokemonListService.getPokemonList(filter?.limit, filter?.offset);
    const pokeList = [];

    if (responseList.status === 200) {
      const responseResults = responseList.data?.results || [];
      for (const pokemon of responseResults) {
        const response = await pokemonDetailService.getPokemonDetail(pokemon.name);
        const pokeData = response.data;
        if (pokeData) {
          pokeList.push({
            ...(pokeData as IPokemonDetailResponse),
            image:
              pokeData?.sprites.other.dream_world.front_default ||
              pokeData?.sprites.other["official-artwork"].front_default,
          });
        }
      }
      setFetchPokemonList({
        data: pokeList,
        loading: false,
        error: null,
      });

      const data = filterPokeList(pokeList, keyword, type, sort);
      setPokemonList({
        data: data,
        loading: false,
        error: null,
      });
    } else {
      setFetchPokemonList({ data: [], loading: false, error: responseList.error });
    }
  };

  const filterPokeList = (
    pokeList: IPokemonDetailResponse[],
    keyword: string,
    type: string,
    sort: "id" | "name",
  ) => {
    const keywordFilter = pokeList.filter((item) =>
      item.name.toLowerCase().includes(keyword?.toLowerCase()),
    );

    const typeFilter =
      type !== "all types"
        ? keywordFilter.filter((item) =>
            item.types.find((f) => f.type.name.toLowerCase().includes(type.toLowerCase())),
          )
        : keywordFilter;

    return sortBy(typeFilter, sort);
  };

  const sortBy = (data: IPokemonDetailResponse[], type: "id" | "name") => {
    switch (type) {
      case "id":
        return data.sort((a, b) => a.id - b.id);
      case "name":
        return data.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      default:
        return data.sort((a, b) => a.id - b.id);
    }
  };

  // first render get pokemon all list from PokemonAPI server
  useEffect(() => {
    callData();
  }, []);

  // filter pokemon list before search input change
  useEffect(() => {
    const data = filterPokeList(fetchPokemon.data, keyword, type, sort);
    setPokemonList({
      data: data,
      loading: false,
      error: null,
    });
  }, [keyword, type, sort]);

  // filter pokemon list before generation input change
  useEffect(() => {
    if (generation !== undefined) {
      callData(generationList[generation]);
    }
  }, [generation]);

  return {
    fieldKeyword: register("keyword"),
    fieldGeneration: register("generation"),
    fieldType: register("type"),
    fieldSort: register("sort"),
    handleSubmit: handleSubmit(onSubmit),
  };
};

export { useSearchForm };
