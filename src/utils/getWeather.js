import axios from 'axios';

const APIKey = "2868d3b861f24c62466eef380fe739eb";

export default async function getWeather(latitude, longitude) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`
    );

    return res.data;

  } catch (error) {
    console.error("Error:", error);
  }
}
