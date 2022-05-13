export const getItemFromLocalStorage = function (key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    return null;
  }
};

export const setItemLocalStorage = function (key, content) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, content);
  }
};
