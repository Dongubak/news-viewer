import './Category.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Route, Swtich, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const categories = [
    {
        name: 'all',
        text: '뉴스 전체',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },{
        name: 'technology',
        text: '기술',
    },
];

function Category() {
    const navigate = useNavigate();
    return(
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand>뉴스보자</Navbar.Brand>
            <Nav className="me-auto">
                {
                    categories.map( (e, i) => {
                        return <Nav.Link key={ i } onClick={ () => navigate(`/${ e.name }`) }>{ e.text }</Nav.Link>
                    })
                }
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Category;