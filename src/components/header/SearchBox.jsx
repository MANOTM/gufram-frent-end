import { useEffect, useState } from 'react';
import BackRow from '../../icon/BackRow';
import './header.css';
import api from '../../config/api';
import { Link } from 'react-router-dom';

function Outb({product,handleNavClose,setResult}) {
    return (
        <Link to={'/'+product._id} className='got-tp' onClick={() => {()=>{setResult([])}}} > 
        <p>{product.name}</p>
                <BackRow /> 
        </Link>
    );
}

function SearchBox({Result, setResult,handleNavClose}) {
    
    const [value, setValue] = useState('');    
    
     useEffect(() => {
         api.get('/products/search/'+value)
      .then(response => {
        setResult(response.data);
        console.log(response.data);
        
      })
      .catch(err => {
        console.log(err);
        setResult([]);
        
      });
    }, [value])
    return (
        <div className="search-box">
            <input type="text" placeholder='SEARCH' value={value} onChange={(e)=>{setValue(e.target.value)}} />
            {Result.map((product, index) => (
                <Outb key={index} product={product} handleNavClose={handleNavClose} setResult={setResult}/>
            ))}    
        </div>
    );
}

export default SearchBox;