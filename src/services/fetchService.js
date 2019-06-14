function fetchService() {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
  return fetch(url).then(response => response.json());
}

export default fetchService;
