const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'b6452fc2',
      s: searchTerm,
    },
  });
  return response.data.Search;
};

const input = document.querySelector('input');

// let timeoutId;
// const onInput = (event) => {
//   if (timeoutId) {
//     clearTimeout(timeoutId);
//   }
//   timeoutId = setTimeout(() => {
//     fetchData(event.target.value);
//   }, 1000);
// };

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener('input', debounce(onInput, 500));
// 09689992987, 800 - 797 - 2326
