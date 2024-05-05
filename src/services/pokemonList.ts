import axios from "axios";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { IGetPokemonListResponse } from "@/interface/pokemonList";
import { handleResponse } from "@/utils/handleResponse";

export const pokemonListService = {
  getPokemonList: async (limit?: number, offset?: number): Promise<IGetPokemonListResponse> => {
    try {
      const response = await axios.get(
        `${POKEMON_BASE_URL}pokemon?limit=${limit || 151}&offset=${offset || 0}`,
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
