export const setItemToCache = (key: string, data: unknown, cacheTime?: number) => {
  localStorage.setItem(key, JSON.stringify({
    data,
    cacheExpireTime: cacheTime && new Date().getTime() + cacheTime,
  }));
};
