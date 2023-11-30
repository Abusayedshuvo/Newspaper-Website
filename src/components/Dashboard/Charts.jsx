import { Chart } from "react-google-charts";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const Charts = () => {
  const axiosPublic = useAxiosPublic();
  const getArticlesCount = async () => {
    const res = await axiosPublic.get(`/article-count`);
    return res;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["articles-count"],
    queryFn: getArticlesCount,
  });

  let items = [["Task", "Hours per Day"]];
  let items2 = data?.data?.map((item) => [item[0], item[1]]);
  const items3 = items.concat(items2);

  console.log(items3);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const options = {
    title: "Total Publisher Articles",
    is3D: true,
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={items3}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default Charts;
