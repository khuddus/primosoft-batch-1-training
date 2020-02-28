
function isOdd(n) {
  var d;
  d=Math.ceil(n/2);
  if ((d* 2) == n)
  {
    return false;
  }
  else
  {
    return true;
  }
}
export {
  isOdd,
};
