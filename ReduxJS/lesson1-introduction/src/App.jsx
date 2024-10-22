import React from 'react'
import { createStore } from 'redux'


const store = createStore((state=0, action) => {
  switch (action.type) {
    case "increment":
      return state+1;
    case "decrement":
        if (state>0) {
          return state-1;
        }else{
          return "no";
        }

    case "reset":
      return state=0


    default:
      return state;
  }
});
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})
store.dispatch({type:'decrement'})
store.dispatch({type:'decrement'})
store.dispatch({type:'decrement'})





// const store = createStore((state=0, action) => {
//   switch (action.type) {
//     case "increment":
//       return state+action.payload;
//     case "decrement":
//         if (state>0) {
//           return state-(typeof(action.payload)=="string" ?0:action.payload);
//         }else{
//           return "no";
//         }

//     case "reset":
//       return state=0


//     default:
//       return state;
//   }
// });


// store.dispatch({
//   type:"increment",
//   payload:5
// })

// store.dispatch({
//   type:"decrement",
//   payload:5
// })
// store.dispatch({
//   type:"decrement",
//   payload:10
// })
// console.log(store.getState());





const App = () => {
  return (
    <div>App</div>
  )
}

export default App