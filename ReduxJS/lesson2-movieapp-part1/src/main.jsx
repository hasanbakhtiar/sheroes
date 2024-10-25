import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import configureStore from './tools/store/configureStore'
import { movieAdd_Action } from './tools/actions/movieAction'
import  Router  from './Router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const movieStore = configureStore();

movieStore.subscribe(()=>{
  console.log(movieStore.getState())
});

// movieStore.dispatch(movieAdd_Action({title:"Inseption",price:40,img:"https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/i0DBDLhuWiY4ue0we5ebwb0W6gxRJF.jpg"}))
// movieStore.dispatch(movieAdd_Action({title:"Interstellar",price:35,img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg"}))
// movieStore.dispatch(movieAdd_Action({title:"Matrix 1",price:74,img:"https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"}))
// movieStore.dispatch(movieAdd_Action({title:"Gifted",price:24,img:"https://vignette.wikia.nocookie.net/giftedmovie/images/4/47/Gifted_Poster.jpg/revision/latest?cb=20180508181652"}))
// movieStore.dispatch(movieAdd_Action({title:"The Book of Henry",price:53,img:"https://flxt.tmsimg.com/assets/p12947683_i_v9_aa.jpg"}))


const fetchApi = ()=>{
  fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(data=>{
    data.map(item=>(
      movieStore.dispatch(movieAdd_Action({title:item.title,price:item.price,img:item.image}))
    ))
  })
}

fetchApi()




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={movieStore}>
      <Router />
    </Provider>
  </StrictMode>,
)
