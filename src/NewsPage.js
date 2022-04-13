import NewsList from "./NewsList";
import { useParams, Outlet } from 'react-router-dom';
import Category from "./Category";
function NewsPage() {
    const params = useParams();
    const category = params.category || 'all';

    return (
        <>
            <Category></Category>
            <NewsList category={ category }></NewsList>
        </>
    )
}

export default NewsPage;