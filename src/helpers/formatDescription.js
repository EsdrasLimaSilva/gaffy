function formatDescription(description) {
  const dc = description.replaceAll("\r", "");
  const desc = dc.split("\n");

  return desc;
}

export default formatDescription;
