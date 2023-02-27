const sortArrayAlphabetically = (array, state) => {
  const sortedArray = array.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (state === "A-Z") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else if (state === "Z-A") {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    }
  });

  return sortedArray;
};
const sortArrayByPopulation = (array, state) => {
  const sortedArray = array.sort((a, b) => {
    const nameA = a.population;
    const nameB = b.population;
    if (state === "Lower to Upper") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else if (state === "Upper to Lower") {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    }
  });

  return sortedArray;
};

export const sortArray = (array, state) => {
  if (state === "A-Z" || state === "Z-A") {
    return sortArrayAlphabetically(array, state);
  }
  return sortArrayByPopulation(array, state);
};
