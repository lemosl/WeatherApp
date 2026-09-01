# 🌤️ Weather App

A weather application built with **React** and **Vite**, using the **OpenWeather API** to retrieve real-time weather data.

The application allows users to search for a city and view the current weather conditions and a 5-day forecast.

## 🚀 Features

* Search weather by city
* Display current weather information
* Display current temperature
* Show weather conditions
* Display weather icons
* Display additional weather information
* 5-day weather forecast
* Dynamic weather data from the OpenWeather API
* API data fetching with TanStack Query
* Loading and error state handling
* Query caching
* Automatic retry for failed requests
* Prevent API requests when no city is provided

## 🛠️ Technologies

* **React**
* **Vite**
* **JavaScript**
* **Axios**
* **TanStack Query**
* **CSS**
* **OpenWeather API**

## Testing

Unit and component tests implemented with Vitest and React Testing Library. Tests are automatically executed through GitHub Actions on every push and pull request.

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
├── hooks/
│   └── useWeather.js
│
├── services/
│   └── weatherApi.js
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

## 🔑 Environment Variables

Create a `.env` file in the root of the project and add your OpenWeather API key:

```env
VITE_OPENWEATHER_API_KEY=your_api_key
```

Make sure the `.env` file is included in `.gitignore` and is not uploaded to GitHub.

## 📚 What I Learned

This project was built to practice **React, API integration and asynchronous data management**.

During the development of this application, I worked with:

* React components
* `useState`
* `useEffect`
* `useRef`
* Custom React Hooks
* TanStack Query
* `useQuery`
* Query keys and query functions
* Query caching
* `staleTime`
* Automatic request retries
* Conditional queries with `enabled`
* API requests with Axios
* OpenWeather API
* Handling asynchronous data
* Loading and error states
* Rendering dynamic information
* Passing data through props
* Creating reusable components
* Separating API logic from UI components
* Working with weather forecast data
* Converting Unix timestamps into readable dates

## 🧠 Data Fetching

The project uses a custom Hook to encapsulate the weather data fetching logic:

```js
const useWeather = (city) => {
    return useQuery({
        queryKey: ["weather", city],
        queryFn: () => getWeather(city),
        enabled: !!city,
        staleTime: 5 * 60 * 1000,
        retry: 2,
    });
};
```

This approach keeps the API and data-fetching logic separated from the UI components and allows TanStack Query to handle caching, loading states, errors and request retries.

## 🎯 Project Goal

The main goal of this project was to practice building a React application that consumes an external API while learning how to manage asynchronous data with **TanStack Query**.

The project also helped me understand how to structure a React application using reusable components, custom Hooks and a separate service layer for API communication.
