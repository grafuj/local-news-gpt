import React from "react"; // Import React
import { Link } from "react-router-dom";

export const Lobby = (props) => {

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
        <Link to="/News" state={result}>
          <input type="submit" value="Generate" />
        </Link>
      </form>
      <div className={styles.result}>test result</div>
    </main>
  );

};