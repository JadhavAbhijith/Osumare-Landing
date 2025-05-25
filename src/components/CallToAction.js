import React, { useState, useEffect } from 'react';
import styles from '../styles/CallToAction.module.css';

const CallToAction = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('submissions'));
    if (stored && Array.isArray(stored)) {
      setUserData(stored);
    }
  }, []);

  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        {userData.length > 0 ? (
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Email</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.language}</td>
                  <td>{user.email}</td>
                  <td>{user.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noData}>No submissions yet.</p>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
