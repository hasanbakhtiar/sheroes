import axios from 'axios'
import React, { useRef, useState } from 'react'

const AddList = () => {
    const titleRef = useRef();
    const [alert, setAlert] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3010/ad/category", {
            "titleAz": titleRef.current.value
        }, {
            headers: {
                "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
            }
        })
            .then(res => {
                if (typeof(res.data) === "object") {
                    setAlert("");
                }else{
                    setAlert(res.data)
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <p className='alert alert-danger'>{alert}</p>
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddList