import './Home.css'; 
import Container from '../../layouts/Container/Container';
import useProducts from '../../hooks/useProducts';
import HomeBox from './product/HomeBox';
import Loading from '../../components/loading/Loading';

function Home({}) {
    
    const { products, loading, error } = useProducts();
    return (
        <Container>
            <div className="home">
                {loading && <Loading />}
                {products.map((product,index) => (
                    <HomeBox key={index} product={product} />
                ))}
            </div>
        </Container>
    );
}

export default Home;