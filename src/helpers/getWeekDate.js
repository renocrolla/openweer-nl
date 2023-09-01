function getWeekDate(timestamp) {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString('nl-NL', { weekday: 'long' });
}

export default getWeekDate;