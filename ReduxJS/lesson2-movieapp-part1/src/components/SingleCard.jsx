import React from 'react'

const SingleCard = ({alldata}) => {
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
                <img style={{height:"250px",objectFit:"contain"}} src={alldata.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <h6 className="card-title">${alldata.price}</h6>
                    <a href="#" className="btn btn-dark">Buy now</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard