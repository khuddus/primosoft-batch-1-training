function parseMs(seconds) {
  let totalMilliSeconds = seconds;

  const noOfDays = Math.floor(totalMilliSeconds / (24 * 3600 * 1000));
  totalMilliSeconds %= 24 * 3600 * 1000;

  const noOfHours = Math.floor(totalMilliSeconds / (3600 * 1000));
  totalMilliSeconds %= 3600 * 1000;

  const noOfMinutes = Math.floor(totalMilliSeconds / (60 * 1000));
  totalMilliSeconds %= 60 * 1000;

  const noOfSeconds = Math.floor(totalMilliSeconds / 1000);
  totalMilliSeconds %= 1000;

  const noOfMilliSeconds = totalMilliSeconds;

  const result = {
    days: noOfDays,
    hours: noOfHours,
    minutes: noOfMinutes,
    seconds: noOfSeconds,
    milliseconds: noOfMilliSeconds
  };

  return result;
}

export { parseMs };