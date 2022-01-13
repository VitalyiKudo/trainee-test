const arrayValidation = (array) => {
    if (array.length >= 3) {
      const result = [];
      for (let i = 1; i < array.length - 1; i++) {
        if (
          (array[i] > array[i - 1] && array[i] > array[i + 1]) ||
          (array[i] < array[i - 1] && array[i] < array[i + 1])
        ) {
          result.push(1);
        } else {
          result.push(0);
        }
      }
      return result;
    }
  };

  console.log(arrayValidation([2,5,7,8,1,2]))