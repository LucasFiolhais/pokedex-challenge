// converter peso e altura

export const usePokemonMetrics = () => {
  const formatWeight = (weight: number) => {
    return (weight / 10).toFixed(1) + ' kg';
  };

  const formatHeight = (height: number) => {
    return (height / 10).toFixed(1) + ' m';
  };

  return { formatWeight, formatHeight };
};