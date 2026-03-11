export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokeAPIResponse {
  results: PokemonListItem[];
  count: number;
}

export const usePokemonApi = () => {
  // para a lista dos pokemons
  const getPokemonList = (limit: Ref<number> | number, offset: Ref<number> | number) => {
    return useFetch<PokeAPIResponse>(() => 
      `https://pokeapi.co/api/v2/pokemon?limit=${toValue(limit)}&offset=${toValue(offset)}`
    );
  };

  // para os detalhes
  const fetchPokemonDetails = (name: string) => {
    return useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  };

  return {
    getPokemonList,
    fetchPokemonDetails
  };
};