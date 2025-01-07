import React from 'react'
import { useCreateUserMutation, useGetUserByIdQuery, useGetUserQuery } from './tools/services/jsonplaseholder'
import BoomButton from './BoomButton';

const App = () => {
  // const { data: user, error, isLoading } = useGetUserByIdQuery(1);
  // const {data:users} = useGetUserQuery();
  // console.log(user,error,isLoading);
  // console.log(users,error,isLoading);
  const [createUser, { isLoading, isError, error }] = useCreateUserMutation();

  const formSubmited = async (e) => {
    e.preventDefault();
    const name = e.target.title.value;
    const newUser={name};
    try {
      await createUser(newUser).unwrap();
      console.log("success");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  if (isLoading) {
    <p>Loading...</p>
  }


  return (
    <div>
      RTK  App
      {/* <ul>

        <li>{user && user.name}</li>
      </ul> */}

      <form onSubmit={formSubmited}>
        <input type="text" name='title' />
        <BoomButton />
      </form>
    </div>
  )
}

export default App