import './NewsItem.scss';

function NewsItem(props) {
    const { title, description, url, urlToImage } = props.article;
    
    return(
        <div className="container_1">
                <div className="thumbnail">
                    <img src={ urlToImage } alt="썸네일 사진"></img>
                </div>

                <div className="content">
                    <div className="title">
                        <a href={ url }>{ title }</a>
                    </div>
                    <div className="description">
                        { description }
                    </div>
                </div>
        </div>
    )
}
export default NewsItem;