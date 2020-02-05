import React, { useState, useEffect } from 'react';

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
        }
      };
      fetchData();
    }, []);
    return { data, load, err };
};

export default useFetch;