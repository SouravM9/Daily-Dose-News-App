import React from 'react'

function NewItem(props) {
    return (

        <div className="card m-3" style={{ width: "18rem" }}>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title.substring(0, 45)}...</h5>
                <p className="card-text">{props.description.substring(0, 95)}...</p>
                <p className="card-text" style={{color : 'grey'}}>{new Date(props.publishedDate).toUTCString()}</p>
            </div>
            
            <div className="card-body">
                <a href={props.newsUrl} className="btn btn-primary">Read More</a>
            </div>
        </div>


    )
}

export default NewItem