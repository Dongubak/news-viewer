import axios from "axios";
import styledComponents from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from './lib/usePromise';
import { Outlet } from 'react-router-dom';
const NewsListBlock = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function NewsList(props) {
    const [loading, response, error] = usePromise(
        () => {
            const url = props.category === 'all' ? 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fe9295cb33b8496694efdd189ac7fecf' :
                `https://newsapi.org/v2/top-headlines?country=kr&category=${ props.category }&apiKey=fe9295cb33b8496694efdd189ac7fecf`;
            return axios.get(url);
        }
    , props.category);
    if ( loading ) {
        return <NewsListBlock>로딩중...</NewsListBlock>;
    }

    if  ( !response ) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러</NewsListBlock>
    }
    const { articles } = response.data;
    return(
        <div>
            <Outlet></Outlet>
            {
                articles.map( (article, i) => 
                    <NewsItem key={ i } article={ article } ></NewsItem>
                 )
            }
        </div>
    )
}
export default NewsList;