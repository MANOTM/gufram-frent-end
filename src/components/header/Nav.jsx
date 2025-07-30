import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.css';
import World from '../../icon/World';
import Email from '../../icon/Email';

function Nav({ handleNavClose }) {
    return (
        <AnimatePresence>
            <motion.div
                className="nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.34 }}
            >
                <nav className='center'>
                    <ul onClick={handleNavClose}>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/">Authors</Link></li>
                        <li><Link to="/">Exhibitions</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">News</Link></li>
                    </ul>
                </nav>
                <footer>
                    <div className="h-footer">
                        <div className='center button'>
                            <span>
                                <World />
                            </span>
                            <p>ITALIANO</p>
                        </div>
                        <div className='center button'>
                            <span>
                                <Email />
                            </span>
                            <p>NEWSLETTER</p>
                        </div>
                    </div>
                    <div className="b-footer">
                        <div className='privacy'>
                            PRIVACY AND COOKIE POLICY
                        </div>
                        <div className='blabla'>
                            GUFRAM SRL Località Batasiolo 85/A, 12064, La Morra (CN) P.IVA: 05982260019
                        </div>
                    </div>
                </footer>
            </motion.div>
        </AnimatePresence>
    );
}

export default Nav;