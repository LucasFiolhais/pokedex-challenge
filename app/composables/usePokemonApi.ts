export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokeAPIResponse {
  results: PokemonListItem[];
  count: number;
}

// Interface para os detalhes (resolve o erro do any)
export interface PokemonDetails {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

export const usePokemonApi = () => {
  // para a lista dos pokemons
  const getPokemonList = (limit: Ref<number> | number, offset: Ref<number> | number) => {
    return useFetch<PokeAPIResponse>(() => 
      `https://pokeapi.co/api/v2/pokemon?limit=${toValue(limit)}&offset=${toValue(offset)}`
    );
  };

  // para os detalhes - AQUI FOI REMOVIDO O ANY
  const fetchPokemonDetails = (name: string) => {
    return useFetch<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  };

  return {
    getPokemonList,
    fetchPokemonDetails,
  };
};