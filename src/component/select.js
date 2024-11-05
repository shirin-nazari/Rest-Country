import getInformation from './index.js'
const select = document.getElementById('select-region');
const options = ['Africa', "America", "Asia", 'Europe', 'Oceania']

const selectRegin = (region) => {
    const request = `https://restcountries.com/v3.1/region/${region.toLowerCase()}`
    getInformation(request)
}
const createOption = () => {
    options.forEach(item => {
        const option = document.createElement('option')
        option.value = item;
        option.text = item;
        option.classList.add('option')
        select.appendChild(option)
    })
    select.addEventListener('change', (e) => {
        selectRegin(e.target.value)
    })
    const option = document.querySelector('.option');
    selectRegin(option.value)
}
export { createOption }
