import React from 'react';
import './Newsitem.css';

const Newsitems = ({title,description,url,urlToImage,publishedAt,author,source}) => {
  return (
    
        <div className='newsapp' key={source}>
            <img className='newsimg' src={urlToImage}></img><br/>
            <span className='newspublished'>{publishedAt}</span>
            <span className='newsauthor'>{author}</span>
            <h3 className='newstitle'><a href={url}>{title}</a></h3>
             <p className='newsdesc'>{description}</p>

        </div>

    
  )
}

export default Newsitems