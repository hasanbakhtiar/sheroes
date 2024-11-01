const movieState = [];


export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [action.movie,...state];
    case "EDIT_MOVIE":
      return state.map(item=>{
        if (item.id === action.id) {
            return {...item,...action.update}
        }else{
          return item
        }
      })
      
    case "DELETE_MOVIE":
      return state.filter(p=>{
        return p.id !== action.id
      })

    default:
      return state;
      
  }
}