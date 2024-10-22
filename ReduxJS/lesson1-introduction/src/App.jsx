import React from 'react'
import { createStore } from 'redux'


const store = createStore((state=0, action) => {
  switch (action.type) {
    case "increment":
      return state+1;
    case "decrement":
      return state-1;

    case "reset":
      return state=0


    default:
      return state;
  }
});

store.dispatch({
  type:"reset"
})
store.dispatch({
  type:"decrement"
})

console.log(store.getState());



const App = () => {
  return (
    <div>App</div>
  )
}

export default App