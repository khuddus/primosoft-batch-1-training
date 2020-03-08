function objectInvert(object) {
  const array = (Object.entries(object).map((pair) => {
    const obj = {};
    obj[pair[1]] = pair[0];
    return obj;
    })).reduce((result, pair) => {
    const key = Object.keys(pair);
    result[key] = pair[key];
    return result;
  }, {});
  return array;
}

export {
  objectInvert,
};
