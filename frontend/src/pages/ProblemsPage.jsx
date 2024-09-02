import React, { useEffect, useState } from 'react';
import Problems from "../components/Problems";
import Loader from '../components/Loader';

export default function ProblemsPage() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProblems() {
      try {
        const response = await fetch('http://localhost:3000/api/problems'); // Adjust this URL if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch problems');
        }
        const data = await response.json();
        console.log(data);
        setProblems(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching problems:', error.message);
      }
    }
    fetchProblems();
  }, []);

  return (
    <main>
      {loading && <Loader />}
      {!loading && <Problems problems={problems} />}
    </main>
  );
}