import { useEffect, useState } from "react";

const useMovies = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fetchFunction]);

  return { data, loading };
};

export default useMovies;
