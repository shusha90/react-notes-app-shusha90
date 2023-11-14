const noteModel = (id, body, title = "No Title") => ({
  [id]: {
    title: title,
    body: body,
    date: Date.now(),
  },
});

export default noteModel;
