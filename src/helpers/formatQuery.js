const formatQuery = function (str) {
  return String(str).trim().replaceAll(" ", "-").toLowerCase();
};

export { formatQuery };
