const setGameTitle = function (title) {
  const txt = title.split("");
  if (txt.length >= 20) {
    const txtFormat = txt.slice(0, 20);
    txtFormat[21] = "...";
    return txtFormat.join("");
  } else {
    return txt;
  }
};

export default setGameTitle;
