import { useRouter } from "next/router";
import LocalNewsPage from "./LocalNewsPage";

const CityResult = () => {
  const router = useRouter();
  const { result } = router.query;
  const parsedResult = JSON.parse(result);

  return <LocalNewsPage parsedResult={parsedResult} />;
};

export default CityResult;
