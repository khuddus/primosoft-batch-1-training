function objectValues(obj) {
  const arr = Object.entries(obj).map(key_val => key_val[1]);
  if (Array.isArray(arr)){
    return arr;
  }
}
export {
  objectValues,
};
