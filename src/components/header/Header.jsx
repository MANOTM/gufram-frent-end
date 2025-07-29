import { Link, useLocation } from 'react-router-dom';
import Search from '../../icon/Search';
import './header.css'; 
import { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import SearchBox from './SearchBox';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [OpenNav, setOpenNav] = useState(false);
    const [OpenSearch, setOpenSearch] = useState(false);
    const handleSearchClose = () => {
        setOpenSearch(!OpenSearch);
        setOpenNav(false);
    }
    const handleNavClose = () => {
        setOpenNav(!OpenNav);
        setOpenSearch(false);
    } 

    return (
        <motion.div
            className={`header ${OpenNav || OpenSearch ? ' open' : ''}`}
            onClick={() => {setOpenNav(false); setOpenSearch(false);}}
        > 
            <motion.header
                className={`main-header ${isHome ? ' active' : ''}`}
                onClick={e => e.stopPropagation()}
                animate={{ height:OpenNav ? '485px':OpenSearch ? '130px':'54px' }} 
                transition={{ duration: 0.1, ease: "linear" }}
                style={{ overflow: 'hidden' }}
            >
                <div className="tete">
                    <div
                        className={`burger-icon${OpenNav ? ' open' : ''}`}
                        onClick={handleNavClose}>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to="/" className='logo'>guframe</Link>
                    <div className="serach" onClick={handleSearchClose}>
                        <Search/>
                    </div>
                </div>
                {OpenNav && <Nav handleNavClose={handleNavClose}/>}
                {OpenSearch && <SearchBox />}
            </motion.header>
        </motion.div>
    )
}

export default Header;