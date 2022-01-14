const arrayValidation = (array) => {
  if (array.length >= 3) {
    const result = [];
    for (let i = 1; i < array.length - 1; i++) {
      result.push(Number((
        (array[i] > array[i - 1] && array[i] > array[i + 1]) ||
          (array[i] < array[i - 1] && array[i] < array[i + 1])
      )));
    }
    return result;
  }
};

