export const saveCities = (cities) => {
  localStorage.setItem("CITIES", JSON.stringify(cities));
};

export const loadCities = () => {
  try {
    return JSON.parse(localStorage.getItem("CITIES")) ?? [];
  } catch {
    return [];
  }
};