import React from "react"; // Import React
// import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Link from 'next/link';

export const Lobby = (props) => {
  const { result } = props;

  return (
    <main className={styles.main}>
      <img src="/dog.png" className={styles.icon} />
      <h3>Enter a City</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter a city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <Link href="/News">
          <input type="submit" value="Generate" />
        </Link>
      </form>
      <div className={styles.result}>test result</div>
    </main>
  );

};