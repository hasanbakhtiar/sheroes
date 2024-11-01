import supabase from "../../../utils/supabase";

export const movieAddToDatabase_Action = async (movies) => {
  const { data, error } = await supabase.from("movie-sheroes").insert(movies);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign('/dashboard');

  }
}




export const movieAdd_Action = ({id, title, price, img }) => ({
  type: "ADD_MOVIE",
  movie: {
    id,
    title,
    price,
    img
  }
})

export const movieEdit_Action = (id, update) => ({
  type: "EDIT_MOVIE",
  id, update
})

export const movieDelToDatabase_Action = async (id) => {
  const { error, data } = await supabase.from('movie-sheroes').delete().eq("id", id)
  if (error) {
    console.log(error);
  } else {
      console.log(data);
      window.location.assign('/dashboard');
  }
}

