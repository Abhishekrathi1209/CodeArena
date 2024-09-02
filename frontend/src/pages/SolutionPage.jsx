import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement";
import { ProblemSubmitBar } from "../components/ProblemSubmitBar";
import Loader from "../components/Loader";
import "../styles/SolutionPage.css";


export default function SolutionPage() {

    const [problem, setProblem] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.backend_url

    useEffect(() => {
        async function fetchProblems() {
            try {
                const response = await fetch('https://codearena-backend-47pw.onrender.com/api/problems' + id);
                if (!response.ok) {
                    throw new Error('Failed to fetch problems');
                }
                const data = await response.json();
                console.log(data);
                setProblem(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
                console.error('Error fetching problems:', error);
            }
        }
        fetchProblems();
    }, [id]);
    return (
        <div className="solution-page">
            {loading && <Loader />}
            {problem && (
                <div className="solution-container">
                    <div className="problem-section">
                        <ProblemStatement problem={problem} />
                    </div>
                    <div className="submit-bar-section">
                        <ProblemSubmitBar problem={problem} contestId={null} />
                    </div>
                </div>
            )}
        </div>
    );
}