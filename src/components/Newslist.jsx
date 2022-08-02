import  React,{ useEffect,useState } from "react";
import axios from "axios";
import Newsitems from "./Newsitems";




const Newslist = () => {
    const[articles,setArticles]=useState([])
  

    useEffect(()=>{
        const getarticles=async ()=>{
            const response= await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-07-02&sortBy=publishedAt&apiKey=69e13e1d38a64497bd237c0337156faf`)
        console.log(response)
        setArticles(response.data.articles)
        }
        getarticles()
 
    },[])
  return (
    <div className="allnews">
        {articles.map(articles=>{
            return (
                <Newsitems
                title={articles.title}
                description={articles.description}
                url={articles.url}
                urlToImage={articles.urlToImage}
                publishedAt={articles.publishedAt}
                author={articles.author}
                key={articles.source.id}
                 />
            )
        })}
    </div>
  )
}

export default Newslist