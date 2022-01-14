const format = (array, formating, limit) => {
  const arr = [];
  let string = "";

  stringArray.forEach((wordsArr, idx) => {
    const isLeft = formating[idx] === "LEFT"; // determine which side the formatting is on

    const addStar = () =>
      `${isLeft ? "*" : ""}${string.trim()}${!isLeft ? "*" : ""}`; // add star to string

    wordsArr.forEach((word, i) => {
      // split the string if it is more than the limit
      if (word.length + 1 + string.length <= limit) {
        string = string + " " + word;
      } else {
        arr.push(addStar());
        string = word;
      }
      if (i === wordsArr.length - 1) {
        arr.push(addStar());
        string = "";
      }
    });
  });

  const formatedArr = arr.map((str) => {
    const isLeft = str.indexOf("*") === 0; // find the position of the star
    if (str.length - 1 < limit) {
      const empty = Array(limit - (str.length - 1)) // create array of space
        .fill("\xa0")
        .join("");
      return isLeft ? `${str}${empty}*` : `*${empty}${str}`; // add array of space
    } else {
      return isLeft ? `${str}*` : `*${str}`;
    }
  });

  formatedArr.push("*".repeat(limit + 2)); // top stars
  formatedArr.unshift("*".repeat(limit + 2)); // bottom stars

  return formatedArr
};

