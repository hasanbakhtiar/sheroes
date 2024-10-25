const movieState = [];


export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [action.movie,...state];
    case "EDIT_MOVIE":
    case "DELETE_MOVIE":

    default:
      return state;
      
  }
}