import React, { useState } from 'react'
import swal from 'sweetalert';

const FormMovie = ({editdata,sendData}) => {
    const [img,setImg] = useState(editdata?editdata.img:"");
    const [title,setTitle] = useState(editdata?editdata.title:"");
    const [price,setPrice] = useState(editdata?editdata.price:"");

        const formSubmited =e=>{
            e.preventDefault();
            if (!img||!title||!price) {
                swal("Please fill input","","warning")
            }else{
                sendData({title,img,price});
            }
        }

    
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <div className="col-5">
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Image url</label>
                        <input type="text" value={img} className="form-control" onChange={e=>setImg(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Title</label>
                        <input type="text" value={title} className="form-control" onChange={e=>setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text" value={price} className="form-control" onChange={e=>setPrice(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-dark">{editdata?"Edit":"Add new"}</button>
                </form>

            </div>
        </div>
    )
}

export default FormMovie