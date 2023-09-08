import React, { useState } from "react";
import Link from 'next/link';
import styles from "./index.module.css";
import { useRouter } from "next/router";

export const Lobby = (props) => {
  const { cityInput, setCityInput, result, setResult } = props;
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generateCity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: cityInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(responseParser(data.result));
      console.log("result:", result)
      router.push("/News");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

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
          <button type="submit">Generate</button>
        </Link>
      </form>
      <div className={styles.result}>test result</div>
    </main>
  );
};
