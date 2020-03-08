
function objectDefaults(object, defaultobjects) {
  const array = [];
  array.push(object);
  array.push(defaultobjects);
  const finalObject = array.reduce((result, obj) => {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      if (!(keys[i] in result)) {
        result[keys[i]] = obj[keys[i]];
      }
    }
    return result;
  }, {});
  return finalObject;
}

export {
  objectDefaults,
};
