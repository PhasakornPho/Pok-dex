import axios from "axios";
import { POKEMON_BASE_URL } from "@/utils/constants";
import { IGetPokemonDetailResponse } from "@/interface/pokemonDetail";
import { handleResponse } from "@/utils/handleResponse";

export const pokemonDetailService = {
  getPokemonDetail: async (name: string): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
