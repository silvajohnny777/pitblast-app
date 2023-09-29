export const SetOnLocalStorage = (
  itemKey: string,
  itemValue: string,
  object?: boolean
) => {
  localStorage.setItem(
    `${itemKey}`,
    object ? JSON.stringify(itemValue) : `${itemValue}`
  );
};
