
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './signin.module.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email, 'Password:', password);
    alert('Sign-in functionality to be implemented');
  };

  return (
    <Layout title="Sign In">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Sign In</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
