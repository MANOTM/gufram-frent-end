import { Link } from 'react-router-dom';
import Container from '../../layouts/Container/Container';
import './Contact.css';

function Contact() {
    return (

        <Container>

            <div className="product center history">
                <div className="product-img center">
                    <img src="https://gufram.it/wp-content/uploads/2024/03/cactus_2_BEYELER.jpg" alt="" />
                </div>
                <div className="product-r">
                    <div className="center-product">
                        <ul>
                            <li>Gufram srl</li>
                            <li>P. IVA 05982260019</li>
                            <li>12064 La Morra (CN), Italy</li>
                            <li>info@gufram.it</li>
                            <li className='none-b'>+39 0173 56102</li>
                        </ul>
                        <div className="flex-text">
                            <p>SOCIAL</p>
                            <div>
                                <Link to=''>FB,</Link>
                                <Link to=''>IG,</Link>
                                <Link to=''>In</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Contact;