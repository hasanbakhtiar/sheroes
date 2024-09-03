const span = document.querySelector('span');

const countryWeather = ()=>{
    fetch('https://open-weather13.p.rapidapi.com/city/baku/AZ',{
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5f09f79cb2msh93cfa77ecbbbee9p1027c7jsn4fcda6d7de7e',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    })
    .then(res=>res.json())
    .then(data=>{
        span.innerHTML = Math.round((data.main.temp-32)*5/9) + " °C"
        
    }
    )
}

countryWeather();

// const list = document.querySelector('.row');

// const fetchData = () => {
//     fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(data => {
//             let li = "";
//             data.map(item => {
//                 li += `<div class="col-12 col-sm-6 col-md-4">
// <div class="card">
//   <img height="300" style="object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${item.title.substring(0,15)}</h5>
//     <p class="card-text">${item.description.substring(0,20)}<a href="#"> Read More</a></p>
//     <a href="#" class="btn btn-dark">Add to cart</a>
//   </div>
// </div>
// </div>`
//             })
//             list.innerHTML = li;
//         }
//         )
// }

// fetchData();