import { useEffect} from "react";
import { useState } from "react";
import NewsTopics from "./NewsTopics";


const NewsBoard = ({category}) => {

    const [articles,setArticles]= useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=80296412af954638b3618a8f7ce0c25f`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[category])

    return (
        <div>
            <h2 className="text-center text-light">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news,index)=>{
                return <NewsTopics key={index} title={news.title} description= {news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard