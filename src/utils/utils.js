export function formatDate(dateString) {
  const date = new Date(dateString);

  // Define month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract day, month, and year from the Date object
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date as 'DD Month YYYY'
  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}
