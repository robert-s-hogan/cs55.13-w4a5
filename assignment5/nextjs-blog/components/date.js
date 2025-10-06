import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  // If dateString is null, return nothing
  if (!dateString) return null;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
