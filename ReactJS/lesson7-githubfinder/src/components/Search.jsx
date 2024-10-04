import React, { useState } from 'react'
import swal from 'sweetalert';
import { ToastContainer, toast,Flip } from 'react-toastify';
const Search = ({ comingData }) => {
    const [keyword, setKeyword] = useState(null);
    const notify = () => toast.warn("Please fill input!");
    const formSubmit = e => {
        e.preventDefault();
        if (!keyword) {
            // swal ( "Oops" ,  "Please fill input!" ,  "warning" )
            notify();
        } else {
            comingData(keyword);
            setKeyword("");
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <div className="col-6">
                <form onSubmit={formSubmit} className="input-group mb-3">
                    <input value={keyword} onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
                    <button className="btn btn-dark" type="submit" >Search</button>
                    <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition= {Flip}
/>
                </form>

            </div>
        </div>
    )
}

export default Search