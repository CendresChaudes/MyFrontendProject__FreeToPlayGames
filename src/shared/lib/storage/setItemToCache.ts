export const setItemToCache = <T>(key: string, data: T, cacheTime?: number) => {
  localStorage.setItem(key, JSON.stringify({
    data,
    cacheExpireTime: cacheTime && new Date().getTime() + cacheTime,
  }));
};
