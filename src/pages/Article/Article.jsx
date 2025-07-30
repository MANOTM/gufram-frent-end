import { useParams } from 'react-router-dom';
import Container from '../../layouts/Container/Container';
import './article.css';
import { useEffect, useState } from 'react';
import api from '../../config/api';
import BackRow from '../../icon/BackRow';
import Loading from '../../components/loading/Loading';
import NotFound from '../../components/notFound/Notfound';


function Article() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [err, setErr] = useState(false); 

    useEffect(() => {
        api.get('/products/' + id)
            .then(response => {
                setProduct(response.data);

                setLoading(false);
            })
            .catch(err => {
                setErr(true);
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            {loading && <Loading/>}
            {err && <NotFound/>}
            {product && 
            <div className="product center">
                <div className="product-img center">
                    <img src={product.img} alt="" />
                </div>
                    <div className="product-r">
                        <div className="center-product">
                            <div className="heading">
                                {product.name}
                            </div>
                            <p>Limited Edition 1/100</p>
                            <div className="flex-text">
                                <p>{product.title}</p>
                                <p>{product.year}</p>
                            </div>
                            <div className="desc">
                                {product.desc}
                            </div>
                            <div className="links">
                                <ul>
                                    <li className='button'>
                                        <p>STORIA</p>
                                        <BackRow/>
                                    </li>
                                    <li className='button'>
                                        <p>AMBIENTI</p>
                                        <BackRow/>
                                    </li>
                                    <li className='button'>
                                        <p>SPECIFICH TECHNICHE</p>
                                        <BackRow/>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
            </div>
            }

        </Container>
    );
}

export default Article;