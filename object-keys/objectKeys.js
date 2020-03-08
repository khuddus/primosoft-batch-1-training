
function objectKeys(object) {
  const array = Object.entries(object).map((pair) => pair[0]);
  if (Array.isArray(array)) {
    return array;
  }
}

export {
  objectKeys,
};
