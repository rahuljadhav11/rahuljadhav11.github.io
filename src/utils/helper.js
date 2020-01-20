export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const titleize = str => {
  let string_array = str.split(" ");
  string_array = string_array.map(tmpStr => {
    return capitalize(tmpStr);
  });

  return string_array.join(" ");
};
