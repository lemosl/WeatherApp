# 🌤️ Weather App

A simple weather application built with **React** and **Vite** using the **OpenWeather API**.

The application allows users to search for a city and view the current weather conditions as well as a 5-day forecast.

## 🚀 Features

* Search weather by city
* Display current weather information
* Display current temperature
* Show weather condition
* Show weather icon
* Display additional weather information
* 5-day weather forecast
* Dynamic weather data from the OpenWeather API

## 🛠️ Technologies

* **React**
* **Vite**
* **JavaScript**
* **Axios**
* **CSS**
* **OpenWeather API**

## 📂 Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── WeatherResults/
│   │   ├── WeatherResults.jsx
│   │   └── style.css
│   │
│   └── WeatherResults5days/
│       ├── WeatherResults5days.jsx
│       └── style.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
```

### 2. Enter the project folder

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local URL where you can access the application.

## 🔑 OpenWeather API

This project uses the OpenWeather API to retrieve weather data.

You need to create an API key and configure it in the project.

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

Replace `your_api_key` with your own API key.

Make sure the `.env` file is included in `.gitignore` and is **not uploaded to GitHub**.

## 📚 What I Learned

This project was built to practice React and working with external APIs.

During the development of this application, I worked with:

* React components
* `useState`
* `useEffect`
* `useRef`
* API requests with Axios
* OpenWeather API
* Handling asynchronous data
* Rendering dynamic information
* Passing data through props
* Creating reusable components
* Working with weather forecast data
* Converting timestamps into readable dates

## 🎯 Project Goal

The main goal of this project was to practice consuming an external API with React and displaying dynamic information through reusable components.



