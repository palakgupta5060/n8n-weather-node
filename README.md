# 🌦️ n8n Weather Node

A custom **n8n Community Node** built with **TypeScript** that fetches real-time weather information using the **Open-Meteo API**.

---

## 🚀 Features

- 🌍 Search weather by city name
- 📍 Automatic geocoding (City → Coordinates)
- 🌡️ Live temperature
- 💧 Humidity
- 🌬️ Wind speed
- 🌎 Country & location details
- ⚡ Built as a custom n8n Community Node
- 🔗 Integrated with the Open-Meteo Weather API

---

## 🛠️ Tech Stack

- TypeScript
- n8n
- Node.js
- Open-Meteo Geocoding API
- Open-Meteo Weather API

---

## 📂 Project Structure

```text
nodes/
└── Weather/
    └── Weather.node.ts

icons/
└── weather.svg

credentials/

package.json
tsconfig.json
README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/palakgupta5060/n8n-weather-node.git
```

Go to the project folder:

```bash
cd n8n-weather-node
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

---

## ▶️ Usage

1. Install the custom node in n8n.
2. Drag the **Weather** node into your workflow.
3. Enter the desired city name.
4. Execute the workflow.
5. Receive live weather information including:
   - Temperature
   - Humidity
   - Wind Speed
   - Country
   - Coordinates

---

## 📸 Project Screenshots

### 🖼️ Project Overview

> Add your LinkedIn cover image here.

### 🔄 n8n Workflow

> Add screenshot of the workflow.

### 💻 Weather Node Code

> Add screenshot of the Weather.node.ts implementation.

### ✅ Output

> Add screenshot of the workflow execution output.

---

## 📊 Example Output

| City | Country | Temperature | Humidity | Wind Speed |
|------|---------|------------:|---------:|-----------:|
| Delhi | India | 30.4°C | 81% | 9.6 km/h |

---

## 🌐 API Used

This project uses the **Open-Meteo API** for fetching real-time weather information.

- Weather API
- Geocoding API

Website:
https://open-meteo.com/

---

## 🚀 Future Improvements

- 7-Day Weather Forecast
- Air Quality Index (AQI)
- UV Index
- Sunrise & Sunset Information
- Weather Icons
- Multi-City Support
- Weather Alerts

---

## 👩‍💻 Author

**Palak Gupta**

B.Tech Electronics & Computer Engineering

Interested in AI • LLMs • n8n • Automation • TypeScript

GitHub:
https://github.com/palakgupta5060

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the **MIT License**.
