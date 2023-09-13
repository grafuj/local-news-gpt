import Head from "next/head";
import { useState } from "react";
import { responseParser } from "./api/responseParser";
import { useRouter } from "next/router";

import { LocalNewsPage } from "./LocalNewsPage";
import { Lobby } from "./Lobby";
import styles from "./index.module.css";

import News from "./[news]";

export default function Home() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState();

  const router = useRouter();
  const { query } = router;

  if (query.page === "News") {
    return <News newsCityInput={cityInput} newsResult={result} />;
  }

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
        router.push('/News');
        console.log("result33:", result);
      }, 1500);

      // router.push("/News");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }


  return (
    <>
      <Head>
        <title>Local News GPT</title>
        <link rel="icon" href="/dog.png" />
      </Head>

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
    </>
  );
}
