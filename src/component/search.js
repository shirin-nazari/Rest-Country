import getInformation from './index.js'
const searchInput = document.getElementById('search-country');
function search() {
    return searchInput.addEventListener('change', (e) => {
        let searchValue = e.target.value;
        const request = `https://restcountries.com/v3.1/name/${searchValue}`;
        getInformation(request)
    })
}
export { search }