import { useRouter } from "next/router";
import LocalNewsPage from "./LocalNewsPage";

const CityResult = (props) => {
  // const router = useRouter();
  // const { result } = router.query;
  // const parsedResult = JSON.parse(result);
  console.log("props", props)

  return <LocalNewsPage parsedResult={parsedResult} />;
};

export default CityResult;
