export const upDistricts = [
  { name: "Lucknow", slug: "lucknow", population: "45 lakh", avgSunHours: "5.5", topAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Chinhat"] },
  { name: "Kanpur Nagar", slug: "kanpur-nagar", population: "30 lakh", avgSunHours: "5.4", topAreas: ["Swaroop Nagar", "Kakadeo", "Kidwai Nagar", "Panki", "Kalyanpur"] },
  { name: "Agra", slug: "agra", population: "21 lakh", avgSunHours: "5.8", topAreas: ["Dayal Bagh", "Sikandra", "Kamla Nagar", "Shahganj", "Raja Mandi"] },
  { name: "Varanasi", slug: "varanasi", population: "18 lakh", avgSunHours: "5.3", topAreas: ["Lanka", "Sigra", "Bhelupur", "Cantonment", "Sarnath"] },
  { name: "Prayagraj", slug: "prayagraj", population: "14 lakh", avgSunHours: "5.5", topAreas: ["Civil Lines", "George Town", "Naini", "Jhunsi", "Phaphamau"] },
  { name: "Meerut", slug: "meerut", population: "17 lakh", avgSunHours: "5.6", topAreas: ["Saket", "Pallavpuram", "Shastri Nagar", "Ganga Nagar", "Modipuram"] },
  { name: "Ghaziabad", slug: "ghaziabad", population: "23 lakh", avgSunHours: "5.5", topAreas: ["Indirapuram", "Vaishali", "Kaushambi", "Raj Nagar", "Vasundhara"] },
  { name: "Bareilly", slug: "bareilly", population: "10 lakh", avgSunHours: "5.4", topAreas: ["Civil Lines", "Rajendra Nagar", "Pilibhit Bypass", "Izatnagar", "Subhash Nagar"] },
  { name: "Gorakhpur", slug: "gorakhpur", population: "8 lakh", avgSunHours: "5.2", topAreas: ["Mohaddipur", "Taramandal", "Shahpur", "Golghar", "Rapti Nagar"] },
  { name: "Gautam Buddha Nagar", slug: "gautam-buddha-nagar", population: "19 lakh", avgSunHours: "5.5", topAreas: ["Noida Sec 62", "Greater Noida", "Noida Sec 137", "Noida Sec 50", "Jewar"] },
  { name: "Aligarh", slug: "aligarh", population: "9 lakh", avgSunHours: "5.6", topAreas: ["Civil Lines", "Ramghat Road", "Marris Road", "Dodhpur", "Bannadevi"] },
  { name: "Moradabad", slug: "moradabad", population: "10 lakh", avgSunHours: "5.4", topAreas: ["Civil Lines", "Majhola", "Delhi Road", "Pakbara", "Lajpat Nagar"] },
  { name: "Saharanpur", slug: "saharanpur", population: "7 lakh", avgSunHours: "5.5", topAreas: ["Court Road", "Chilkana Road", "Delhi Road", "Rampur Maniharan", "Behat"] },
  { name: "Jhansi", slug: "jhansi", population: "6 lakh", avgSunHours: "5.9", topAreas: ["Civil Lines", "Sipri Bazar", "Sadar Bazar", "Elite Chowk", "Nai Basti"] },
  { name: "Mathura", slug: "mathura", population: "5 lakh", avgSunHours: "5.8", topAreas: ["Dampier Nagar", "Krishna Nagar", "Refinery Nagar", "Highway Road", "Vrindavan"] },
  { name: "Firozabad", slug: "firozabad", population: "5 lakh", avgSunHours: "5.7", topAreas: ["Suhag Nagar", "Nai Basti", "Tundla", "Jasrana", "Shikohabad"] },
  { name: "Muzaffarnagar", slug: "muzaffarnagar", population: "4 lakh", avgSunHours: "5.6", topAreas: ["New Mandi", "Civil Lines", "Jansath Road", "Khatauli", "Shamli Road"] },
  { name: "Ayodhya", slug: "ayodhya", population: "3 lakh", avgSunHours: "5.3", topAreas: ["Faizabad", "Naka", "Civil Lines", "Rikabganj", "Sahadatganj"] },
  { name: "Sultanpur", slug: "sultanpur", population: "3 lakh", avgSunHours: "5.3", topAreas: ["Civil Lines", "Kotwali", "Amethi Road", "Lambhua", "Kadipur"] },
  { name: "Sitapur", slug: "sitapur", population: "3 lakh", avgSunHours: "5.4", topAreas: ["Lakhimpur Road", "Civil Lines", "Mishrikh", "Biswan", "Sidhauli"] },
];

export function getCityData(slug) {
  return upDistricts.find((c) => c.slug === slug) || null;
}

export function getAllCitySlugs() {
  return upDistricts.map((c) => c.slug);
}
