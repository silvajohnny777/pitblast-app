export const removeFromLocalStorage = (itemKey: string) => {
  localStorage.removeItem(`${itemKey}`);
};
