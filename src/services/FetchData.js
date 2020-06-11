
const api_url = "https://api.covid19api.com/summary";
const fetchData = () => fetch(api_url).then(response => response.json())

export default fetchData;