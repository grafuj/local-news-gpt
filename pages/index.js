import Head from "next/head";
import { useState } from "react";
import { responseParser } from "./api/responseParser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Link from 'next/link';


import { LocalNewsPage } from "./LocalNewsPage";
import { Lobby } from "./Lobby";
import styles from "./index.module.css";


export default function Home() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState();

  // const router = useRouter();

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
      // Navigate to the new page with the result as a query parameter
      // router.push(`/cityResult?result=${encodeURIComponent(parsedResult)}`);

    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Local News GPT</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/News" element={<LocalNewsPage content={result} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
