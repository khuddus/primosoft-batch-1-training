function objectPairs(object) {
  const array = Object.entries(object).map((pairs) => pairs);
  if (Array.isArray(array) && Array.isArray(array[0])) {
    return array;
  }
}

export {
  objectPairs,
};
