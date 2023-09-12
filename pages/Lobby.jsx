import React, { useState, useEffect } from "react";
import Link from 'next/link';
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { responseParser } from "./api/responseParser";

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
      console.log("data26:", data);
      console.log("parsed data27:", responseParser(data.result));
      setResult(responseParser(data.result));
      
      setTimeout(() => {
        // setResult(responseParser(data.result));
        router.push('/News')
        console.log("result33:", result);
      }, 1500);

      // router.push("/News");
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
        {/* <Link href="/News"> */}
          <button type="submit">Generate</button>
        {/* </Link> */}
      </form>
      {/* <div className={styles.result}>lobby 51{result && result[0].title}</div> */}
      {/* <div className={styles.result}>{result && result[0].descriptions}</div> */}
    </main>
  );
};
