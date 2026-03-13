// 1. Criamos uma interface apenas com o que as tuas funções precisam
interface PokemonDetails {
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
}

export const usePokemonFormatter = () => {
  const formatName = (name: string) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const formatId = (id: number | string) => {
    if (!id) return '';
    return `#${String(id).padStart(3, '0')}`;
  };

  const getFrontSprite = (details: PokemonDetails | null | undefined) => {
    return details?.sprites?.front_default || '/fallback.png';
  };

  const getOfficialArtwork = (details: PokemonDetails | null | undefined) => {
    return (
      details?.sprites?.other?.['official-artwork']?.front_default ||
      details?.sprites?.front_default ||
      '/fallback.png'
    );
  };

  const formatWeight = (weight: number) => {
    return (weight / 10).toFixed(1) + ' kg';
  };

  const formatHeight = (height: number) => {
    return (height / 10).toFixed(1) + ' m';
  };

  return {
    formatName,
    formatId,
    getFrontSprite,
    getOfficialArtwork,
    formatWeight,
    formatHeight
  };
};