
function chunkArrayInGroups(arr, size) {
  return arr.reduce((acc, val, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!Array.isArray(acc[chunkIndex])) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(val);
    return acc;
  }, []);
}

export {
  chunkArrayInGroups,
};
