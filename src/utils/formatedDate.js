export function getMonth(data) {
  const year = parseInt(data.substring(0, 4));
  const monht = parseInt(data.substring(4, 6)) - 1;
  const day = parseInt(data.substring(6, 8));
  const date = new Date(year, monht, day);
  const monthName = new Intl.DateTimeFormat("uk-UK", { month: "long" }).format(
    date
  );
  return monthName;
}

export function getYear(data) {
  const year = parseInt(data.substring(0, 4));
  return year;
}
