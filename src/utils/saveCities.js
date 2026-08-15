export const saveCities = (cities) => {
  const citiesList = cities.map((response) => response.city);
  localStorage.setItem("CITIES", JSON.stringify(citiesList));
};