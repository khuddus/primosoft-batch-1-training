
function isEven(n) {
  var d;
  d=Math.ceil(n/2);
  if ((d* 2) == n)
  {
    return true;
  }
  else
  {
    return false;
  }
}

export {
  isEven,
};
