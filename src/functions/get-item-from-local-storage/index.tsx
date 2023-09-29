export const getFromLocalStorage = (item: string, isObject?: boolean) => {
  const storageItem = localStorage.getItem(`${item}`);
  if (isObject && storageItem !== null) {
    return JSON.parse(storageItem);
  }
  return storageItem;
};
