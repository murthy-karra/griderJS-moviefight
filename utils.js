const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      console.log('Pausing');
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
