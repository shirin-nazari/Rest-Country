const containerDetails = document.querySelector('.container-details')
const html = document.getElementById('htmlPage');
const btnDarkLight = document.getElementById('btn-dark')
const id = new URLSearchParams(window.location.search).get('id');
// dark mode 
btnDarkLight.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode-html')) {
        html.setAttribute('data-bs-theme', 'light')
        document.body.classList.remove('dark-mode-html')
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        document.body.classList.add('dark-mode-html')
    }
})
// 
const renderDetails = async () => {
    const res = await fetch('https://restcountries.com/v3.1/alpha?codes=' + id);
    const post = await res.json();
    console.log(post)
    const section = document.createElement('section')
    section.classList.add('section-details')
    post.forEach(element => {
        // console.log(element.currencies.currencies[0])
        const border = element.borders ?
            element.borders.map(item => `<a class="btn btn-outline-secondary list-inline-item d-lg-inline" href='#'>${item}</a>`).join('')
            : 'no Borders';
        section.innerHTML = `
        <img class='image' src=${element.flags.png || element.flags.svg || ""} alt=${element.title}/>
        <div class='card-body row'>
        <h3 class='card-title '>${element.name.common}</h3>
        <div class='row detail-body'>
        <div class='col '>
            <p class='card-text'>Native Name : ${element.name.nativeName ? Object.values(element.name.nativeName)[0].common : ''}</p>
            <p class='card-text '>Population : ${element.population}</p>
            <p class='card-text '>Region : ${element.region}</p>
            <p class='card-text '>Sub Region : ${element.subregion}</p>
            <p class='card-text'>Capital : ${element.capital}</p>
        </div>
        <div class='col'>
            <p class='card-text'>Top Level Domain : ${element.tld}</p>
            <p class='card-text'>Currencies: ${element.currencies ? Object.values(element.currencies)[0].name : ''}</p>
            <p class='card-text'>Languages: ${element.languages ? Object.values(element.languages).join(', ') : ''}</p>
        </div>
        </div>
        <div class='list-inline d-lg-inline d-sm-block'>
            <h6 class='card-text border-country list-inline-item d-lg-inline d-sm-block d-xs-block'>Border Countries:
            </h6>
            ${border}
        </div >
    </div >
    `
    })


    containerDetails.appendChild(section)
}
window.addEventListener('DOMContentLoaded', () => renderDetails())