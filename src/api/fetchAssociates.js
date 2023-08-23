import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchAssociates = () => {
  const [Associate, setAssociate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssociate = async () => {
      try {
        const response = await axios.get('http://localhost:5000/associates');
        setAssociate(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchAssociate();
  }, []);

  return { Associate, isLoading };
};