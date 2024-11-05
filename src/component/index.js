import { createOption } from "./select.js"
import { search } from "./search.js"
const html = document.getElementById('htmlPage');
const btnDarkLight = document.getElementById('btn-dark')
const container = document.querySelector('.container');
let request = '';
// dark and light 
btnDarkLight.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode-html')) {
        html.setAttribute('data-bs-theme', 'light')
        document.body.classList.remove('dark-mode-html')
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        document.body.classList.add('dark-mode-html')
    }
})
// Ui card
const generateUi = (articles) => {
    articles.forEach(element => {
        let article = document.createElement('article');
        article.classList.add('card')
        article.innerHTML = `
        <a href="./component/details.html?id=${element.ccn3}">
             <img class='card-img-top' src=${element.flags.png || element.flags.svg || ""} alt=${element.title}/>
             <div class='card-body'>
                <h5 class='card-title'>${element.name.common}</h5>
                <p class='card-text'>Population : ${element.population}</p>
                <p class='card-text'>Region : ${element.region}</p>
                <p class='card-text'>Capital : ${element.capital}</p>
            </div>
         </a>
    `
        container.appendChild(article)
    })
}
// get information country from API
const getInformation = async (req) => {
    container.innerHTML = '';
    let response = await fetch(req)
    if (!response.ok) {
        alert("Data Unavailable at the moment. Please try agin letter.");
        return false;
    }
    let data = await response.json();
    generateUi(data)
}

window.onload = () => {
    request = 'https://restcountries.com/v3.1/all'
    getInformation(request);
    createOption()
    search()
}
export default getInformation;
