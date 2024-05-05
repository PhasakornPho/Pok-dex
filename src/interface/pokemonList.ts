import { IResponse } from "@/utils/handleResponse";

export interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse;
}

export interface IPokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: IPokemonListItem[];
}

export interface IPokemonListItem {
  name: string;
  url: string;
}
