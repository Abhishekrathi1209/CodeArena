import React, { useState } from 'react';
import { Button, Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import '../styles/Problems.css';
import { Link } from 'react-router-dom';

export default function Problems({ problems }) {

  return (
    <section className="problems-section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h4" component="h2">
            Popular Problems
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Check out the most popular programming problems on Code100x.
          </Typography>
        </div>
        <div className="problems-grid">
          {problems.map((problem) => (
            <ProblemCard problem={problem} key={problem.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem }) {
  return (
    <Card className="problem-card">
      <CardHeader
        title={problem.title}
        subheader="Problem for beginners"
      />
      <CardContent>
        <div className="problem-details">
          <div className="problem-detail">
            <Typography variant="body2" color="textSecondary">
              Difficulty
            </Typography>
            <Typography variant="body1">{problem.difficulty}</Typography>
          </div>
          <div className="problem-detail">
            <Typography variant="body2" color="textSecondary">
              Submissions
            </Typography>
            <Typography variant="body1">{problem.solved}</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Link to={`/problems/${problem.id}`}>
          <Button>
            View Problem
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
