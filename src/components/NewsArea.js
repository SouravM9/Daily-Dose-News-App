import React, { useState } from 'react'
import NewItem from './NewItem'

function NewsArea(props) {
    const [title, setTitle] = useState('Ram Charan, His Wife Upasana Did This Ritual Before The Oscars To Keep Them Connected to India');
    const [newsUrl, setNewsUrl] = useState('https://www.news18.com/movies/ram-charan-his-wife-upasana-did-this-ritual-before-the-oscars-to-keep-them-connected-to-india-7289815.html');
    const [description, setDescription] = useState('During an interview, RRR actor Ram Charan revealed that he and his wife Upasana set up a temple wherever they go so they feel connected to India.');
    const [publishedDate, setPublishedDate] = useState('2023-03-14 09:43:28');
    const [imageUrl, setImageUrl] = useState('https://images.news18.com/ibnlive/uploads/2023/03/ram-charan-upasana-1.jpg');
    const [source, setSource] = useState('News18');

    return (
        <>
            <h1>{props.title} Dose</h1>
            <div className="container d-flex flex-row mb-3 flex-wrap">

                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
                <NewItem title={title} description={description} newsUrl={newsUrl} publishedDate={publishedDate} imageUrl={imageUrl} source={source} />
            </div>
        </>
    )
}

export default NewsArea