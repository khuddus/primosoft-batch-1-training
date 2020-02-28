
function isTriangle(a, b, c) {

  if (a < (b + c) && b < (a + c) && c < (a + b)){
    return true;
  }
  else {
    return false;
  }
}
export {
  isTriangle,
};
