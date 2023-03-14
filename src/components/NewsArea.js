import React, { useState, useEffect } from 'react'
import NewItem from './NewItem'
import key from '../key.js'

function NewsArea(props) {

    const defaultImageUrl = 'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg';

    const [dataList, setDataList] = useState([]);
    const getNews = () => {

        const url = 'https://newsdata2.p.rapidapi.com/news?country=in&language=en';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key,  // Env variable is not working
                'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setDataList(json['results'])
            })
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        getNews();

    }, [])

    return (
        <>
            <h1>{props.title} Dose</h1>
            <div className="container d-flex flex-row mb-3 flex-wrap">
                {dataList && dataList.map(item => (

                    <NewItem title={item.title}
                        description={item.description}
                        newsUrl={item.link}
                        publishedDate={item.pubDate}
                        imageUrl={item.image_url ? item.image_url : defaultImageUrl}
                        source={item.source_id}
                        key={item.link + item.title}
                    />
                ))}

            </div>
        </>
    )
}

export default NewsArea