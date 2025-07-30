import { useState, useEffect } from 'react';
import api from '../config/api'; 

const useSearch = ({value}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(333);
    
    api.get('/products/search/'+value)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
        
      })
      .catch(err => {
        console.log(err);
        
      });
  }, []);

  return { products};
};

export default useSearch;