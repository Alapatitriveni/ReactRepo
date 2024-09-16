// LoginForm.js
import React, { useState } from 'react';
import NavBar1 from './Navbar1';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        // Example login handling
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear the form and error message
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <>
        <NavBar1/>
        <center>
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label text="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div><br></br>
                <div>
                    <label text="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div><br></br>
                <button type="submit">Login</button>
            </form>
        </div>
        </center>
        </>
    );
};

export default LoginForm;
