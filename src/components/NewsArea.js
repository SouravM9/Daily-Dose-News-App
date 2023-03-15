import React, { useState, useEffect } from 'react'
import NewItem from './NewItem'
import key from '../key.js'
import InfiniteScroll from "react-infinite-scroll-component";

function NewsArea(props) {

    const defaultImageUrl = 'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg';

    const [dataList, setDataList] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [hasMore, setHasMore] = useState(false);
    const category = props.title.toLowerCase();


    const getNews = async () => {

        const url = `https://newsdata2.p.rapidapi.com/news?country=in&category=${category}&language=en`;

        console.log(category);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key,  // TODO: Env variable is not working
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
            const url = `https://newsdata2.p.rapidapi.com/news?country=in&category=${category}&language=en&page=${nextPage}`;

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': key,  // TODO: Env variable is not working
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1>{props.title} Dose</h1>
            <InfiniteScroll
                dataLength={dataList.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}  // TODO : Spinner Component need to be added
            >

                <div className="container d-flex flex-row mb-3 flex-wrap">
                    {dataList.length === 0 ? <h2 className='text-align-center'>Loading... Please Wait!</h2> :

                        dataList.map(item => (

                            <NewItem title={item.title ? item.title : ''}
                                description={item.description ? item.description : ''}
                                newsUrl={item.link ? item.link : ''}
                                publishedDate={item.pubDate ? item.pubDate : ''}
                                imageUrl={item.image_url ? item.image_url : defaultImageUrl}
                                source={item.source_id ? item.source_id : ''}
                                key={item.link + item.title}
                            />
                        ))}

                </div>
            </InfiniteScroll>

        </>
    )
}

export default NewsArea