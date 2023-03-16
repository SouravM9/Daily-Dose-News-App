import React from 'react'

function LoadingSpinner() {
    return (
        <div className='container'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif'
                alt='Loading..Please Wait!'
                style={{ height: '120px', width: '160px' }}
            />
        </div>
    )
}

export default LoadingSpinner