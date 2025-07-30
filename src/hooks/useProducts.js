import { useState, useEffect } from 'react';
import api from '../config/api'; 

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
        
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;