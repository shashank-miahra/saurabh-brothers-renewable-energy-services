export const upDistricts = [
  { name: "Lucknow", slug: "lucknow", population: "45 lakh", avgSunHours: "5.5", topAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Chinhat"], theme: 1, image: "/images/cities/lucknow_solar.png" },
  { name: "Kanpur", slug: "kanpur", population: "30 lakh", avgSunHours: "5.6", topAreas: ["Swaroop Nagar", "Kidwai Nagar", "Kakadeo", "Panki", "Govind Nagar"], theme: 3, image: "/images/cities/kanpur_solar.png" },
  { name: "Agra", slug: "agra", population: "21 lakh", avgSunHours: "5.8", topAreas: ["Dayal Bagh", "Sikandra", "Kamla Nagar", "Shahganj", "Raja Mandi"], theme: 2, image: "/images/cities/agra_solar.png" },
  { name: "Prayagraj", slug: "prayagraj", population: "14 lakh", avgSunHours: "5.5", topAreas: ["Civil Lines", "George Town", "Naini", "Jhunsi", "Phaphamau"], theme: 2, image: "/images/cities/prayagraj_solar.png" },
  { name: "Aligarh", slug: "aligarh", population: "10 lakh", avgSunHours: "5.7", topAreas: ["Civil Lines", "Marris Road", "Ramghat Road", "Dodhpur", "Jamalpur"], theme: 3, image: "/images/cities/aligarh_solar.png" },
  { name: "Varanasi", slug: "varanasi", population: "14 lakh", avgSunHours: "5.5", topAreas: ["Lanka", "Sigra", "Bhelupur", "Cantt", "Sarnath"], theme: 1, image: "/images/cities/varanasi_solar.png" },
  { name: "Meerut", slug: "meerut", population: "15 lakh", avgSunHours: "5.6", topAreas: ["Pallavpuram", "Saket", "Shastri Nagar", "Ganga Nagar", "Modipuram"], theme: 2, image: "/images/cities/meerut_solar.png" },
  { name: "Ghaziabad", slug: "ghaziabad", population: "16 lakh", avgSunHours: "5.7", topAreas: ["Indirapuram", "Vaishali", "Raj Nagar", "Vasundhara", "Crossings Republik"], theme: 3, image: "/images/cities/ghaziabad_solar.png" },
  { name: "Bareilly", slug: "bareilly", population: "10 lakh", avgSunHours: "5.6", topAreas: ["Civil Lines", "Rajendra Nagar", "Deen Dayal Puram", "Suresh Sharma Nagar", "DD Puram"], theme: 1, image: "/images/cities/bareilly_solar.png" },
  { name: "Gorakhpur", slug: "gorakhpur", population: "7 lakh", avgSunHours: "5.4", topAreas: ["Golghar", "Medical College Road", "Rustampur", "Shahpur", "Padri Bazar"], theme: 2, image: "/images/cities/gorakhpur_solar.png" },
  { name: "Noida", slug: "gautam-buddha-nagar", population: "6 lakh", avgSunHours: "5.7", topAreas: ["Sector 15", "Sector 18", "Sector 62", "Sector 137", "Greater Noida"], theme: 3, image: "/images/cities/noida_solar.png" },
  { name: "Jhansi", slug: "jhansi", population: "5 lakh", avgSunHours: "5.8", topAreas: ["Civil Lines", "Sipri Bazar", "Sadabazar", "Nandanpura", "Medical College"], theme: 1, image: "/images/cities/jhansi_solar.png" },
  { name: "Mathura", slug: "mathura", population: "4 lakh", avgSunHours: "5.8", topAreas: ["Krishna Nagar", "Highway", "Jaisingh Pura", "Govardhan", "Vrindavan"], theme: 2, image: "/images/cities/mathura_solar.png" },
  { name: "Ayodhya", slug: "ayodhya", population: "3 lakh", avgSunHours: "5.5", topAreas: ["Naya Ghat", "Civil Lines", "Deokali", "Faizabad City", "Rikabganj"], theme: 3, image: "/images/cities/ayodhya_solar.png" },
  { name: "Saharanpur", slug: "saharanpur", population: "7 lakh", avgSunHours: "5.6", topAreas: ["Court Road", "Hasanpur", "Avas Vikas", "Delhi Road", "Mission Compound"], theme: 1, image: "/images/cities/saharanpur_solar.png" },
  { name: "Moradabad", slug: "moradabad", population: "9 lakh", avgSunHours: "5.6", topAreas: ["Civil Lines", "Ram Ganga Vihar", "Ashiyana", "Buddhi Vihar", "MDA"], theme: 2, image: "/images/cities/moradabad_solar.png" }
];

export function getCityData(slug) {
  return upDistricts.find((c) => c.slug === slug) || null;
}

export function getAllCitySlugs() {
  return upDistricts.map((c) => c.slug);
}
