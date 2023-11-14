import { Box, Grid } from "@material-ui/core";
import React from "react";
import Note from "./Note";

const Notelist = (props) => {
  const { notes, deleteNote, modifyNote } = props;
  return (
    <>
      {Object.keys(props.notes).length > 0 && (
        <Box p={3}>
          <Grid item container spacing={4}>
            {Object.keys(notes).map((keyName) => {
              return (
                <Note
                  key={keyName}
                  note={notes[keyName]}
                  id={keyName}
                  modifyNote={modifyNote}
                  deleteNote={deleteNote}
                />
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Notelist;
