export const isDataItemEmpty = <T>(item: T) => (!item || item === '?') ? 'N/A' : item;
