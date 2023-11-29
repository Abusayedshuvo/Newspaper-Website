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
                <Grid key={publisher._id} item xs={3}>
                  <div style={{ margin: "0 20px" }}>
                    <img width="150px" src={publisher.publisherLogo} alt="" />
                    <Typography variant="h6">
                      {publisher.publisherName}
                    </Typography>
                  </div>
                </Grid>
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
