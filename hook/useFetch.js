import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await axios.get("http://localhost:3000/api/cards");
  //     setData(res.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    getData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
