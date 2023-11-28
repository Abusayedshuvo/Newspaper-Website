import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;
