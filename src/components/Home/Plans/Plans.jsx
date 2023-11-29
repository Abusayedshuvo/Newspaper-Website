import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Title from "../../Title/Title";
import { List, ListItem, ListItemText } from "@mui/material";

const Plans = () => {
  return (
    <>
      <Title>Plans</Title>

      <Box my={10} mx={20} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item={true} xs={6}>
            <Card sx={{ minWidth: 275, marginRight: "20px" }}>
              <CardContent>
                <Typography variant="h4" color="text.secondary" gutterBottom>
                  Free Plan
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="News articles" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Basic analysis and opinion pieces" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Access to recent archives" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Subscription to a regular email newsletter" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Display ads to support the free plan" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button size="small">Tyr free</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item={true} xs={6}>
            <Card sx={{ minWidth: 275, marginLeft: "20px" }}>
              <CardContent>
                <Typography variant="h4" color="text.secondary" gutterBottom>
                  Premium Plan
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Unlimited access to all articles" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Premium analysis and in-depth features" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Access to a complete archive of past articles" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="No display ads for a seamless reading experience" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Save articles for later" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Personalized recommendations based on reading history" />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button size="small">Get Premium Plan</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Plans;
