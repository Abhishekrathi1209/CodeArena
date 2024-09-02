import React, { useEffect, useState } from 'react';
import Problems from "../components/Problems";
import Loader from '../components/Loader';

export default function ProblemsPage() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.backend_url

  useEffect(() => {
    async function fetchProblems() {
      try {
        const response = await fetch('https://codearena-backend-47pw.onrender.com/api/problems');
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