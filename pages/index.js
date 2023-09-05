import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState();

  // async function onSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     // Initialize an array to store the concatenated responses
  //     const allResponses = [];

  //     let index = 0;

  //     // Repeat the request until the index is -1 (indicating the end of the response)
  //     while (index !== -1) {
  //       const response = await fetch("/api/generateCity", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json", },
  //         body: JSON.stringify({ city: cityInput }),
  //       });


  //       console.log("response", response)

  //       const data = await response.json();
  //       // console.log("data", data)
  //       // console.log("index on line 27", index)
        
  //       // Check for errors
  //       if (response.status !== 200) {
  //         throw data.error || new Error(`Request failed with status ${response.status}`);
  //       }

  //       // console.log("result", data.result);
  //       // console.log("isArray", Array.isArray(data.result));
  //       // console.log("typeof result", typeof data.result[0].text);
  //       // Check if the response has a valid structure
  //       if (
  //         Array.isArray(data.result) &&
  //         data.result.length > 0 &&
  //         typeof data.result[0].text === "string"
  //         ) {
  //           // Concatenate the text from the response to the array of all responses
  //           allResponses.push(data.result[0].text);
            
  //           // Update the index from the response
  //           index = data.result[0].index;
  //         } else {
  //           // Handle invalid response structure
  //           console.error("Invalid response:", data);
  //           break; // Exit the loop in case of an error
  //         }
  //       }
      

  //     // Once you have all responses, you can join them to get the complete response
  //     const completeResponseText = allResponses.join("\n");
  //     setResult(completeResponseText);

  //     // Optionally, you can log the complete response
  //     // console.log("console log of complete response", completeResponseText);

  //     setCityInput("");
  //   } catch (error) {
  //     // Handle errors
  //     console.error(error);
  //     alert(error.message);
  //   }
  // }


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
      console.log("data.result:", data.result, "typeof data.result:", typeof data.result)
      setResult(data.result);
      setCityInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }


  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Enter a city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <input type="submit" value="Generate city data" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
