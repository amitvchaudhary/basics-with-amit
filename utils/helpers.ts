export function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("en-us", {
      day: "numeric",
      month: "long",
    });
  }
