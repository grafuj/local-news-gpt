import Head from "next/head";
import { useState } from "react";
import { responseParser } from "./api/responseParser";
import { useRouter } from "next/router";

import { LocalNewsPage } from "./LocalNewsPage";
import { Lobby } from "./Lobby";
import "./index.module.css";
import News from "./[news]";

export default function Home() {
  const [result, setResult] = useState();
  const router = useRouter();
  const { query } = router;

  let pageComponent;
  if (query.page === "News") {
    pageComponent = <News result={result} />;
  } else {
    pageComponent = <Lobby result={result} setResult={setResult} />;
  }

  return (
    <div>
      <Head>
        <title>Local News GPT</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      {pageComponent}
    </div>
  );
}
