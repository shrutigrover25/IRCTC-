import React from "react";
import styles from "./Register.module.css"; // Import CSS Module

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
