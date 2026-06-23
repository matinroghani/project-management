import moment from "jalali-moment";

export const toJalali = (date: string | number | null) => {
  if (!date) return "-";
  return moment(date).locale("fa").format("YYYY/MM/DD");
};

export const toDayjs = (date: string | number | null) => {
  if (!date) return null;
  return moment(date).toDate(); 
};