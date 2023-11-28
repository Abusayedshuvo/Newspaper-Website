import { useQuery } from "@tanstack/react-query";
import Title from "../../Title/Title";

import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";
import { Container, Grid, Typography } from "@mui/material";

const Publisher = () => {
  const axiosPublic = useAxiosPublic();

  const getPublishers = async () => {
    const res = await axiosPublic.get(`/publishers`);
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["publishers"],
    queryFn: getPublishers,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Title>All Publisher</Title>

      <Container>
        {data?.data?.publishers?.length > 0 ? (
          <>
            <Grid my={10} container spacing={2}>
              {data?.data?.publishers?.map((publisher) => (
                <div key={publisher._id}>
                  <Typography variant="h5">
                    {publisher.publisherName}
                  </Typography>
                  <img width="200px" src={publisher.publisherLogo} alt="" />
                </div>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <p className=" text-center">No Service Available on this name</p>
          </>
        )}
      </Container>
    </>
  );
};

export default Publisher;
