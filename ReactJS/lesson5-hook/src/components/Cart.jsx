import React from 'react'

const Cart = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.ptitle}</h5>
                    <p className="card-text">${props.pprice}</p>
                    <a href="#" style={{ backgroundColor: `${props.pcolor}` }} className="btn btn-primary"></a>
                </div>
            </div>
        </div>
    )
}

export default Cart