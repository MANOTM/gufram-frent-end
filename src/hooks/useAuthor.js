import { useState, useEffect } from 'react';
import api from '../config/api'; 

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/authors')
      .then(response => {
        setAuthors(response.data);
        console.log(response.data);
        
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { authors, loading, error };
};

export default useAuthors;