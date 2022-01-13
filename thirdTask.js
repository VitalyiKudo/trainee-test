let format = (array, formating, limit) => {
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

 

  return arr
};

