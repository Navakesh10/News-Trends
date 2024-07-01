import image from '../assets/news-img.jpg'

const NewsTopics = ({title, description, src, url}) => {
    return (
    <div className="card bg-lighter text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"365px"}} >
    <img src={src?src:image} style={{height:"200px", width:"347.5px"}} className="card-img-top" alt="..." />
    <div className="card-body" >
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description? description.slice(0,90):"News article conveys information about a recent occurrence or event, providing details on something that has recently happened."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
    )
}

export default NewsTopics


