const convertDate = (epochNumber) => {
  const date = new Date(epochNumber);
  const leadingZero = (num) => `0${num}`.slice(-2);

  const formatTime = (date) =>
    [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(leadingZero)
      .join(":");

  const stringDate = `${date.getDay()}/${date.getMonth()}/${date
    .getFullYear()
    .toString()} - ${formatTime(date)}`;
  return stringDate;
};

export { convertDate };
