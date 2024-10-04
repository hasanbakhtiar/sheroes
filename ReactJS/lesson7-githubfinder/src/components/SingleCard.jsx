import React from 'react'

const SingleCard = ({userdata}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card">
                <img src={userdata.avatar_url} className="card-img-top" alt={userdata.login} />
                <div className="card-body">
                    <h5 className="card-title">{userdata.login}</h5>
                    <p className="card-text">{userdata.node_id}</p>
                    <a href={userdata.html_url} className="btn btn-dark">Go profile</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard