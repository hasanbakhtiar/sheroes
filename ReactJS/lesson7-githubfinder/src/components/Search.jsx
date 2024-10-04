import React, { useState } from 'react'

const Search = ({comingData}) => {
    const [keyword,setKeyword] = useState(null);

    const formSubmit = e =>{
        e.preventDefault();
        comingData(keyword);
        setKeyword("");
    }
    
    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <div className="col-6">
                <form onSubmit={formSubmit} className="input-group mb-3">
                    <input value={keyword} onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username"  />
                    <button className="btn btn-dark" type="submit" >Search</button>
                </form>

            </div>
        </div>
    )
}

export default Search