function mapObject(object) {
  const finalObject = Object.entries(object).map((pair) => {
    pair[1] *= pair[1];
    return pair;
  }).reduce((result, pair) => {
    result[pair[0]] = pair[1];
    return result;
  }, {});
  return finalObject;
}
export {
  mapObject,
};
