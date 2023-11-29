import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const Subscription = () => {
  return (
    <>
      <Helmet>
        <title>Synergy Press || Subscription</title>
      </Helmet>
      <div
        style={{
          backgroundColor: "#d600003b",
          padding: "120px 50px",
        }}
      >
        <Container>
          <Typography textAlign="center" variant="h2" gutterBottom>
            Subscription For Premium Services
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Subscription;
