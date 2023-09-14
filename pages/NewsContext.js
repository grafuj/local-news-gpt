import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [cityInput, setCityInput] = useState("");
  const [result, setResult] = useState();

  return (
    <NewsContext.Provider value={{ cityInput, setCityInput, result, setResult }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  return useContext(NewsContext);
}
