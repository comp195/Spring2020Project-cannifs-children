import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#e6e6fa",
    margin: "0.5%",
    color: "black",
  },
}));

export default function JobCard({ jobData }) {
  const styles = useStyles();

  return jobData.map(({ Title, Company, Location, Link }) => (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          {Title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {Company}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {Location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={Link}>
          Click Here for this Job Posting
        </Button>
      </CardActions>
    </Card>
  ));
}

// return (
//   <Card className={styles.card}>
//     <CardContent>
//       <Typography variant="h5" gutterBottom fontWeight="bold">
//         Software Developer
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Apple Inc.
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         San Jose, CA
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Click Here for this Job Posting</Button>
//     </CardActions>
//   </Card>
// );