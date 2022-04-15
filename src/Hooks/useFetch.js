import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    let response, json;

    try {
      setError(null);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) setError(json.StatusCode);
    } catch (error) {
      json = null;
      setError(error);
    } finally {
      setData(json);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    request,
  };
};

export default useFetch;
