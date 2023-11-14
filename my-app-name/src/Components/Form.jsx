import React from "react";
import { Box, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteBody: "",
      noteTitle: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  resetForm = () => {
    this.setState({ noteBody: "", noteTitle: "" });
  };

  submitNote(e) {
    const {
      props: { createNote },
      state: { noteBody, noteTitle },
      resetForm,
    } = this;
    e.preventDefault();
    createNote(noteBody, noteTitle);
    resetForm();
  }

  shouldEnable() {
    const { noteBody, noteTitle } = this.state;
    return !(noteBody && noteTitle);
  }

  render() {
    return (
      <Box p={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Crate a Note:
            </Typography>
            <TextField
              fullWidth
              placeholder="Title"
              type="text"
              inputProps={{
                maxLength: 10,
              }}
              variant="outlined"
              name="noteTitle"
              value={this.state.noteTitle}
              onInput={(e) => {
                this.handleChange(e);
              }}
            />
            <Box mt={2}>
              <TextField
                label="Don't forget to..."
                multiline
                fullWidth
                inputProps={{
                  maxLength: 90,
                }}
                rows={4}
                variant="outlined"
                name="noteBody"
                value={this.state.noteBody}
                onInput={(e) => {
                  this.handleChange(e);
                }}
              />
            </Box>
            <Box mt={2}>
              <Button
                disabled={this.shouldEnable()}
                onClick={(e) => {
                  this.submitNote(e);
                }}
                variant="contained"
                size="large"
                color="primary">
                Create Note
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default Form;
