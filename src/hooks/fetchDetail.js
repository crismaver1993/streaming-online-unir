import { useState, useEffect } from 'react';

function useFetchMovieDetail(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!url) return;
    
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch data');
          const result = await response.json();
    
          console.log('Response Data:', result); 
          setData(result); 
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
    }, [url]);
    
  
    return { data, loading, error };
  }
  
  export default useFetchMovieDetail;