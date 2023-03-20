import React from 'react'

function NewItem(props) {
    return (

        <div className="card m-3" style={{
            width: '18rem'
        }}>
            <span class="badge rounded-pill bg-danger" style={
                {
                    position: 'absolute',
                    width: 'fit-content',
                    right: '0',
                }
            }>{props.source}</span>
            <img src={props.imageUrl} className="card-img-top" alt="..." style={{ width: 'fir-content', height: '165px' }} />

            <div className="card-body">
                <h5 className="card-title">{props.title.substring(0, 45)}...</h5>
                <p className="card-text">{props.description.substring(0, 95)}...</p>
                <p className="card-text" style={{ color: 'grey' }}>{props.publishedDate}</p>
            </div>

            <div className="card-body">
                <a href={props.newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
            </div>
        </div>


    )
}

export default NewItem