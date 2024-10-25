export const movieAdd_Action = ({title,price,img})=>({
    type:"ADD_MOVIE",
    movie:{
      id:crypto.randomUUID(),
      title,
      price,
      img
    }
  })