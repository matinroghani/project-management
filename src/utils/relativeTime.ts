export function getRelativeTime(createdAt: number, now = Date.now()) {
  const diff = now - createdAt;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  const formatter = new Intl.RelativeTimeFormat("fa", {
    numeric: "auto",
  });

  if (diff < hour) {
    return formatter.format(-Math.floor(diff / minute), "minute");
  }

  if (diff < day) {
    return formatter.format(-Math.floor(diff / hour), "hour");
  }

  if (diff < month) {
    return formatter.format(-Math.floor(diff / day), "day");
  }

  if (diff < year) {
    return formatter.format(-Math.floor(diff / month), "month");
  }

  return formatter.format(-Math.floor(diff / year), "year");
}