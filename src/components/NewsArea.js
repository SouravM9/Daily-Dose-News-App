import React, { useState, useEffect } from 'react'
import NewItem from './NewItem'
import key from '../key.js'
import InfiniteScroll from "react-infinite-scroll-component";

function NewsArea(props) {

    const defaultImageUrl = 'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg';

    const [dataList, setDataList] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [hasMore, setHasMore] = useState(false);


    const getNews = async () => {

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

                if (json['nextPage']) {
                    setHasMore(true);
                    setNextPage(json['nextPage']);
                }
                setDataList(json['results']);
            })
            .catch(err => console.error('error:' + err));
    }

    const fetchMoreData = async () => {

        if (nextPage !== '') {
            const url = `https://newsdata2.p.rapidapi.com/news?country=in&language=en&page=${nextPage}`;

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

                    if (json['nextPage']) {

                        setHasMore(true);
                        setNextPage(json['nextPage']);
                    }
                    let oldNews = dataList;
                    setDataList(oldNews.concat(json['results']));
                })
                .catch(err => console.error('error:' + err));
        }
        else {
            setHasMore(false);
        }

    };

    useEffect(() => {
        getNews();

    }, [])

    return (
        <>
            <h1>{props.title} Dose</h1>
            <InfiniteScroll
                dataLength={dataList.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >

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
            </InfiniteScroll>

        </>
    )
}

export default NewsArea