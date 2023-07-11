import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, [url]);

  return data;
}

export default useFetch;
