import  { useContext } from 'react'
import { DataContext } from '../context/DataContext'


const ListOne = () => {
    const mydata = useContext(DataContext);
    
  return (
    <div>
        {mydata?.dummyApi.length===0?"Loading":<>
        <h1>{mydata?.dummyApi[0].title}</h1>
        <h1>{mydata?.fakeStoreApi[0].title}</h1>
        
        </>}
    </div>
  )
}

export default ListOne