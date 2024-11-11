const movieState = [];


export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.movie;
    default:
      return state;
      
  }
}