export const formatDateToLocal = (dateString) => {
  return new Date(dateString).toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
};
