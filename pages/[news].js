import React, { useState, useEffect } from "react";
import { LocalNewsPage } from "./LocalNewsPage";

export default function News(props) {
  const { cityInput, result } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 150ms delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(delay);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // You can replace this with a loading spinner or component
      ) : (
        <LocalNewsPage cityInput={cityInput} result={result} />
      )}
    </div>
  );
}
