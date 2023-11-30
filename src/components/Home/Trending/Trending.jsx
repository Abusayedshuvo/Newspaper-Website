// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./style.css";

import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { Typography } from "@mui/material";

const Trending = () => {
  const axiosPublic = useAxiosPublic();

  const getArticles = async () => {
    const res = await axiosPublic.get(`/articles/approved`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.data?.length > 0 ? (
          <>
            {data?.data?.map((article) => (
              <SwiperSlide
                key={article._id}
                my={10}
                container="true"
                spacing={2}
              >
                <div>
                  <img src={article?.imageUrl} alt="" />
                  <Typography variant="h5" gutterBottom>
                    {article?.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {article?.description.slice(0, 180)}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {article?.postedDate}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            <p className=" text-center">No Service Available on this name</p>
          </>
        )}
      </Swiper>
    </>
  );
};

export default Trending;
