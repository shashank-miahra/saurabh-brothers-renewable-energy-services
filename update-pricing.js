const fs = require('fs');
let data = fs.readFileSync('src/lib/blog-data.js', 'utf8');

// Blog 1: solar-panel-installation-cost-uttar-pradesh-2025 table
data = data.replace(
/\| 1 kW \| ₹65,000 – ₹75,000 \| ₹35,000 – ₹45,000 \| ₹800 – ₹1,200 \|[\s\S]*?\| 10 kW \| ₹5,50,000 – ₹6,50,000 \| ₹4,72,000 – ₹5,72,000 \| ₹8,000 – ₹12,000 \|/,
`| 1 kW | ₹60,000 | ₹20,000 | ₹800 – ₹1,200 |
| 2 kW | ₹1,20,000 | ₹42,000 | ₹1,600 – ₹2,400 |
| 3 kW | ₹1,80,000 | ₹72,000 | ₹2,400 – ₹3,600 |
| 5 kW | ₹3,00,000 | ₹1,92,000 | ₹4,000 – ₹6,000 |
| 10 kW | ₹6,00,000 | ₹4,92,000 | ₹8,000 – ₹12,000 |`
);

// Blog 1: subsidy text
data = data.replace("- **₹30,000/kW** for the first 2 kW", "- **₹40,000** for a 1 kW system");
data = data.replace("- **₹18,000/kW** for the next 1 kW (2-3 kW)", "- **₹78,000** for a 2 kW system");
data = data.replace("- **Maximum subsidy: ₹78,000** for a 3 kW system", "- **Maximum subsidy: ₹1,08,000** for a 3 kW system and above");
data = data.replace("This means a 3 kW system that costs ₹1,80,000 can be installed for as low as **₹1,02,000** after subsidy — that's a 43% discount!", "This means a 3 kW system that costs ₹1,80,000 can be installed for as low as **₹72,000** after subsidy — that's a 60% discount!");
data = data.replace("- **Total cost after subsidy**: ~₹1,02,000", "- **Total cost after subsidy**: ~₹72,000");

// Blog : Solar Panel Price in Lucknow 2026 table
data = data.replace(
/\| 1 kW \| 1-2 BHK \| ₹65,000 – ₹75,000 \| 120 - 150 units \| 100 sq ft \|[\s\S]*?\| 5 kW \| Large Home \/ Clinic \| ₹2,80,000 – ₹3,20,000 \| 600 - 750 units \| 500 sq ft \|/,
`| 1 kW | 1-2 BHK | ₹60,000 | 120 - 150 units | 100 sq ft |
| 2 kW | 2-3 BHK | ₹1,20,000 | 240 - 300 units | 200 sq ft |
| 3 kW | 3-4 BHK | ₹1,80,000 | 360 - 450 units | 300 sq ft |
| 5 kW | Large Home / Clinic | ₹3,00,000 | 600 - 750 units | 500 sq ft |`
);

// Blog: 3kw-solar-system-price-in-up-with-subsidy
data = data.replace(/Approximate cost \(before subsidy\): \*\*₹1,60,000 to ₹1,80,000\*\*/, "Approximate cost (before subsidy): **₹1,80,000**");
data = data.replace(/PM Surya Ghar Subsidy: \*\*₹78,000\*\*/, "PM Surya Ghar Subsidy: **₹1,08,000**");
data = data.replace(/Final Price after subsidy: \*\*₹82,000 to ₹1,02,000\*\*/, "Final Price after subsidy: **₹72,000**");

// Blog: Commercial Solar Panel Installation in Lucknow table
data = data.replace(
/\| 5 kW \| ₹2,80,000 - ₹3,20,000 \| 600 units \| ₹4,500 - ₹6,000 \|[\s\S]*?\| 50 kW \| ₹22,00,000 - ₹25,00,000 \| 6,000 units \| ₹45,000 - ₹60,000 \|/,
`| 5 kW | ₹3,00,000 | 600 units | ₹4,500 - ₹6,000 |
| 10 kW | ₹6,00,000 | 1,200 units | ₹9,000 - ₹12,000 |
| 20 kW | ₹12,00,000 | 2,400 units | ₹18,000 - ₹24,000 |
| 50 kW | ₹30,00,000 | 6,000 units | ₹45,000 - ₹60,000 |`
);

// Blog: On-grid vs off-grid table
data = data.replace(
/\| On-Grid \| No \| Yes \| City homes, Schools, Offices \| ₹1\.6L - ₹1\.8L \(3kW\) \|[\s\S]*?\| Hybrid \| Yes \| Yes \| Unreliable grid areas, Hospitals \| ₹2\.8L - ₹3\.2L \(3kW\) \|/,
`| On-Grid | No | Yes | City homes, Schools, Offices | ₹1.8L (3kW) |
| Off-Grid | Yes | No | Villages, Farms, No grid areas | ₹2.2L - ₹2.5L (3kW) |
| Hybrid | Yes | Yes | Unreliable grid areas, Hospitals | ₹2.8L - ₹3.2L (3kW) |`
);

fs.writeFileSync('src/lib/blog-data.js', data);
console.log('Updated blog-data.js successfully');
