export function formatDate(date) {
  const inputDate = new Date(date);
  const months = [
    { id: 0, monthAbbr: 'Jan.' },
    { id: 1, monthAbbr: 'Feb.' },
    { id: 2, monthAbbr: 'March' },
    { id: 3, monthAbbr: 'April' },
    { id: 4, monthAbbr: 'May' },
    { id: 5, monthAbbr: 'June' },
    { id: 6, monthAbbr: 'July' },
    { id: 7, monthAbbr: 'Aug.' },
    { id: 8, monthAbbr: 'Sep.' },
    { id: 9, monthAbbr: 'Oct.' },
    { id: 10, monthAbbr: 'Nov.' },
    { id: 11, monthAbbr: 'Dec.' },
  ];

  const month = months.find((m) => m.id === inputDate.getMonth());

  return `${month.monthAbbr} ${inputDate.getFullYear()}`;
}
