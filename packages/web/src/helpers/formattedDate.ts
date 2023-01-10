type Separator = "/" | "-";

const formatDate = (
  date: Date | undefined,
  separator: Separator = "/"
): string => {
  if (!date) {
    return "Date was not provided or undefined!";
  }

  return new Date(date)
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(`${separator}`);
};

export default formatDate;
