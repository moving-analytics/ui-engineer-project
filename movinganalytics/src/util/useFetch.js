import { useState, useEffect } from 'react';

// Custom fetch hook used to retrieve API data 
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoad(true);
      } catch (error){
        setErr(true)
      };
    };
    fetchData();
  }, [url]);
  return { data, load, err };
};

export default useFetch;