export function formatDate(dateString: string | null): string {
  if (!dateString) return "Date to be announced";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function formatVfa(value: number): string {
  return value.toFixed(3);
}
