// pages/[news].js
import { LocalNewsPage } from "./LocalNewsPage"; // Adjust the import path as needed

export default function News(props) {
  const { cityInput, result } = props;
    return <LocalNewsPage cityInput={cityInput} result={result} />;
}
