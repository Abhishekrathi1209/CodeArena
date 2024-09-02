import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../AuthContext';
import { toast } from "react-toastify";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const apiUrl = import.meta.env.backend_url


    const toggleMode = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setName('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            if (isLogin) {
                const response = await axios.post(`${apiUrl}/api/auth/login`, {
                    email,
                    password
                });
                console.log('Login successful:', response.data);
                login(response.data.token);
                navigate('/');
            } else {
                const response = await axios.post(`${apiUrl}/api/auth/register`, {
                    name,
                    email,
                    password
                });
                console.log('Sign-up successful:', response.data);
                login(response.data.token);
                setIsLogin(true);
                navigate('/');
            }
        } catch (error) {
            console.error('Error during authentication:', error.response ? error.response.data : error.message);

            if (error.response) {
                if (error.response.status === 400) {
                    setError(error.response.data.message);
                } else {
                    setError('An unexpected error occurred. Please try again.');
                }
            } else {
                setError('An error occurred. Please check your network connection.');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && !isLogin && <p className="error-message">{error}</p>}
                    <button type="submit" className="auth-button">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <button className="toggle-button" onClick={toggleMode}>
                    {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};
