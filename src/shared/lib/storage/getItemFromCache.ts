export const getItemFromCache = (key: string) => {
  const rawData = localStorage.getItem(key);

  return rawData ? JSON.parse(rawData) as unknown : null;
};
