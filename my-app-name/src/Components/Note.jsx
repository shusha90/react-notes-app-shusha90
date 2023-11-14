import {
  Button,
  Card,
  CardActions,
  Grid,
  Typography,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { convertDate } from "../helpers/convertDate";

const Note = (props) => {
  const {
    note: { body, date, title },
  } = props;

  return (
    <Grid
      onClick={() => {
        const { id, modifyNote } = props;
        modifyNote(id);
      }}
      item
      xs={12}
      md={6}
      lg={4}
      xl={3}>
      <Card>
        <CardContent>
          <Typography
            color="textPrimary"
            variant="h4"
            component="h1"
            gutterBottom>
            {title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
            component="h2"
            gutterBottom>
            {body}
          </Typography>
          <Typography
            color="textSecondary"
            variant="h6"
            component="h2"
            gutterBottom>
            {convertDate(date)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              const { id, deleteNote } = props;
              deleteNote(id);
            }}
            variant="contained">
            Delete
          </Button>
          <Button variant="contained">Modify</Button>{" "}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Note;
