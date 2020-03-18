import { useState, useEffect } from 'react';

//we want to call it only once...

// function with 'url' as argument
export default function useStats(url) {
  //useState
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  //useEffect with async function to fetch
  useEffect(() => {

    async function fetchData() {
      setLoading(true);
      setError();
      //encapsulate the response process with .json() in a var data (await)
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err =>{
          setError(err);
        });
      //update the initial stats
      setStats(data);
      setLoading(false);
    }
    //call function to fetch
    fetchData();
  }, [url]);
  //return something
  return {
    stats,
    loading,
    error,
  };
}


