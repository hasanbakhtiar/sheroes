import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { movieDel_Action } from '../../tools/actions/movieAction';

const Dashboard = () => {
    const movie = useSelector(p => p.movie);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className='text-center my-5 alert alert-dark text-light '>Dashboard</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                    <Link to="/dashboard/add" className="btn btn-dark">Add movie</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movie.map((item, i) => (
                                <tr key={item.id}>
                                    <th scope="row">{i+1}</th>
                                    <td><img height={100} src={item.img} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                    <td><button onClick={()=>{dispatch(movieDel_Action({id:item.id}))}} className='btn btn-danger'>X</button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard