import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import configureStore from './tools/store/configureStore'
import { movieAdd_Action, movieEdit_Action } from './tools/actions/movieAction'
import  Router  from './Router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import supabase from '../utils/supabase'
const movieStore = configureStore();

movieStore.subscribe(()=>{
  console.log(movieStore.getState())
});


const fetchData = async()=>{
    const {data,error} = await supabase.from('movie-sheroes').select();
    if (error) {
      console.log(error);
    }else{
      data.map(item=>(
        movieStore.dispatch(movieAdd_Action({id:item.id,img:item.img,title:item.title,price:item.price}))
      ))
    } 
}

fetchData();




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={movieStore}>
      <Router />
    </Provider>
  </StrictMode>,
)
