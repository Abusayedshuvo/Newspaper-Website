import { Helmet } from "react-helmet";
import Trending from "../components/Home/Trending/Trending";
import Publisher from "../components/Home/Publisher/Publisher";
import Statistic from "../components/Home/Statistic/Statistic";
import Plans from "../components/Home/Plans/Plans";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Synergy Press Newspaper FullStack Website</title>
      </Helmet>
      <Trending></Trending>
      <Publisher></Publisher>
      <Statistic></Statistic>
      <Plans></Plans>
    </>
  );
};

export default Home;
