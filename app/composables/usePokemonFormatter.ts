export const usePokemonFormatter = () => {
  const formatName = (name: string) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // para colocar os numeros "#001" em vez do id
  const formatId = (id: number | string) => {
    if (!id) return '';
    return `#${String(id).padStart(3, '0')}`;
  };

  // buscar a imagem para a lista
  const getFrontSprite = (details: any) => {
    return details?.sprites?.front_default || '/fallback.png';
  };

  // buscar a imagem para o perfil
  const getOfficialArtwork = (details: any) => {
    return details?.sprites?.other?.['official-artwork']?.front_default 
           || details?.sprites?.front_default;
  };

  return { 
    formatName, 
    formatId,
    getFrontSprite, 
    getOfficialArtwork 
  };
};