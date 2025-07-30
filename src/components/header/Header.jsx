import { Link, useLocation, useNavigate } from 'react-router-dom';
import Search from '../../icon/Search';
import './header.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Nav';
import SearchBox from './SearchBox';
import BackRow from '../../icon/BackRow';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '/products'; 
    
    const [OpenNav, setOpenNav] = useState(false);
    const [OpenSearch, setOpenSearch] = useState(false);
    const [Result, setResult] = useState([]);
    const handleSearchClose = () => {
        setOpenSearch(!OpenSearch);
        setOpenNav(false);
        setResult([]);
        console.log(Result);
        
    }
    const handleNavClose = () => {
        setOpenNav(!OpenNav);
        setOpenSearch(false);
    }

     const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  }

    return (
        <>
            <motion.div
                className={`header ${OpenNav || OpenSearch ? ' open' : ''}`}
                onClick={() => { setOpenNav(false); setOpenSearch(false); }}
            >
            </motion.div>
            <motion.header
                className={`main-header ${isHome ? ' active' : ''}`}
                onClick={e => e.stopPropagation()}
                animate={{ height: OpenNav ? '485px' :Result.length > 0  ? 'fit-content' : OpenSearch ? '130px' : '54px' }}
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
                        <Search />
                    </div>
                </div>
                {OpenNav && <Nav handleNavClose={handleNavClose} />}
                {OpenSearch && <SearchBox Result={Result} setResult={setResult} handleNavClose={handleNavClose}/>}
            </motion.header>
            {!isHome && (

                <div className="return center" onClick={handleBack}>
                <BackRow/>
            </div>
            )}
        </>
    )
}

export default Header;