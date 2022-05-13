export const getItemFromLocalStorage = function (key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    return null;
  }
};
