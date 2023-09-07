// pages/[news].js
import { useRouter } from "next/router";
import { LocalNewsPage } from "./LocalNewsPage"; // Adjust the import path as needed
import { Lobby } from "./Lobby";

export default function Page() {
  const router = useRouter();
  // const { page } = router.query;

  // if (page === "News") {
    // Render the LocalNewsPage component when the page query is "News"
    return <LocalNewsPage />;
  // } else {
  //   return <Lobby />;
  // }

  // Handle other cases or render a default component
}
