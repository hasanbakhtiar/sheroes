export const movieAdd_Action = ({ title, price, img }) => ({
  type: "ADD_MOVIE",
  movie: {
    id: crypto.randomUUID(),
    title,
    price,
    img
  }
})

export const movieEdit_Action = (id,update) => ({
  type: "EDIT_MOVIE",
  id,update
})

export const movieDel_Action = ({ id }) => ({
  type: "DELETE_MOVIE",
  id
})

