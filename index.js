const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'b6452fc2',
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector('input');

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

// let timeoutId;
// const onInput = (event) => {
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//   }
//   timeoutId = setTimeout(() => {
//     fetchData(event.target.value);
//   }, 1000);
// };

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));
