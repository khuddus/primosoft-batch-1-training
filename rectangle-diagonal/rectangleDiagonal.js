
function rectangleDiagonal(l, b) {
  var ss = (l * l) + (b * b)
  var d = Math.sqrt(ss);
  return d;
}

export {
  rectangleDiagonal,
};
