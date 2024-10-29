import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { movieAdd_Action } from '../../../tools/actions/movieAction';
const AddMovie = () => {

    const dispatch = useDispatch();
    const [img,setImg] = useState("");
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const navigate = useNavigate();
    
        const formSubmited =e=>{
            e.preventDefault();
            if (!img||!title||!price) {
                swal("Please fill input","","warning")
            }else{
                
                dispatch(movieAdd_Action({img,title,price}));
                navigate('/dashboard');
                
            }
            
        }

    
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='alert alert-dark my-5'>Add Movie</h1>
            <div className="col-5">
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Image url</label>
                        <input type="text" className="form-control" onChange={e=>setImg(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Title</label>
                        <input type="text" className="form-control" onChange={e=>setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" onChange={e=>setPrice(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-dark">Add new</button>
                </form>

            </div>
        </div>
    )
}

export default AddMovie