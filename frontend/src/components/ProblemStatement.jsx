import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/ProblemStatement.css';

export default function ProblemStatement({ problem }) {
    const { description } = problem;

    return (
        <div className="prose">
            <Markdown remarkPlugins={[remarkGfm]}>
                {description}
            </Markdown>
        </div>
    );
}
