export const usePokemonStats = () => {
  const STAT_MAX = 255;

  const calculatePercentage = (value: number) => {
    const percentage = (value / STAT_MAX) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  const getStatColor = (value: number) => {
    // Mantive as tuas cores originais da stat-bar anterior
    if (value < 50) return '#f34444'; 
    if (value < 90) return '#ffdd57'; 
    return '#a0e515'; 
  };

  const formatStatName = (name: string) => {
    const names: Record<string, string> = {
      hp: 'HP',
      attack: 'Ataque',
      defense: 'Defesa',
      'special-attack': 'Sp. Atq',
      'special-defense': 'Sp. Def',
      speed: 'Velocidade'
    };
    return names[name] || name;
  };

  return { calculatePercentage, getStatColor, formatStatName };
};