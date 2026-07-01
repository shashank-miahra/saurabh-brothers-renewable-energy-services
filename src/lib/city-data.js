export const upDistricts = [
  { name: "Lucknow", slug: "lucknow", population: "45 lakh", avgSunHours: "5.5", topAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Chinhat"], theme: 1, image: "/images/cities/lucknow_solar.png" },
  { name: "Kanpur", slug: "kanpur", population: "30 lakh", avgSunHours: "5.6", topAreas: ["Swaroop Nagar", "Kidwai Nagar", "Kakadeo", "Panki", "Govind Nagar"], theme: 3, image: "/images/cities/kanpur_solar.png" },
  { name: "Agra", slug: "agra", population: "21 lakh", avgSunHours: "5.8", topAreas: ["Dayal Bagh", "Sikandra", "Kamla Nagar", "Shahganj", "Raja Mandi"], theme: 2, image: "/images/cities/agra_solar.png" },
  { name: "Prayagraj", slug: "prayagraj", population: "14 lakh", avgSunHours: "5.5", topAreas: ["Civil Lines", "George Town", "Naini", "Jhunsi", "Phaphamau"], theme: 2, image: "/images/cities/prayagraj_solar.png" },
  { name: "Aligarh", slug: "aligarh", population: "10 lakh", avgSunHours: "5.7", topAreas: ["Civil Lines", "Marris Road", "Ramghat Road", "Dodhpur", "Jamalpur"], theme: 3, image: "/images/cities/aligarh_solar.png" },
];

export function getCityData(slug) {
  return upDistricts.find((c) => c.slug === slug) || null;
}

export function getAllCitySlugs() {
  return upDistricts.map((c) => c.slug);
}
