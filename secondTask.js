const matrixValidation = (matrix) => {
  const numberArr = [];

  for (let i = 0; i < matrix[0].length - 2; i++) {
    const filtered = matrix.map((array) =>
      array.filter((_, index) => index >= i && index < i + 3)
    );
    numberArr.push(filtered.flat());
  }

  const result = numberArr.map((arr) =>
    Boolean(
      arr.includes(1) &&
        arr.includes(2) &&
        arr.includes(3) &&
        arr.includes(4) &&
        arr.includes(5) &&
        arr.includes(6) &&
        arr.includes(7) &&
        arr.includes(8) & arr.includes(9)
    )
  );

  return result;
};
