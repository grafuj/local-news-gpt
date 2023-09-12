import React, { useState, useEffect } from "react";
import { LocalNewsPage } from "./LocalNewsPage";

export default function News(props) {
  const { newsCityInput, newsResult } = props;
  const [isLoading, setIsLoading] = useState(true);
  console.log("7 [news]: city, res", newsCityInput, newsResult);


  useEffect(() => {
    // Simulate a 1500ms delay
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
        <LocalNewsPage LNPCityInput={newsCityInput} LNPResult={newsResult} />
        )}
        <div>{newsResult && newsResult[0].title}</div>
        <div>{newsResult && newsResult[0].descriptions}</div>
    </div>
  );
}
