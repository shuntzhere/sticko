import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (path) => {
  const [apiResponse, setApiResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(path);
        setApiResponse(res.data);
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    })();
  }, []);

  return { apiResponse, loading };
};
