export const getItemFromLocalStorage = function (key) {
  const item = localStorage.getItem(key);

  if (typeof window !== "undefined") {
    return JSON.parse(item);
  } else {
    return null;
  }
};

export const setItemLocalStorage = function (key, content) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(content));
  }
};
