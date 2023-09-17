import Head from "next/head";
import { useState } from "react";
import { responseParser } from "./api/responseParser";
import { useRouter } from "next/router";

import { LocalNewsPage } from "./LocalNewsPage";
import { Lobby } from "./Lobby";
import "./index.module.css";
import News from "./[news]";

export default function Home() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState([{}]);

  const router = useRouter();
  const { query } = router;

  const pageComponent = () => {
    if (query.page === "News") {
      console.log("line20: index going to  [news]: city, res", cityInput, result);
      // return <News newsCityInput={cityInput} newsResult={result} />;
    } else {
      return <Lobby cityInput={cityInput} setCityInput={setCityInput} result={result} setResult={setResult} />;
    }
  };

  return (
    <div>
      <Head>
        <title>Local News GPT</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      {pageComponent()}
      {/* {result && result[0].title} */}
    </div>
  );
}
