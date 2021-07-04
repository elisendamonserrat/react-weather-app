import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5/",
    });
  }

  getWeatherByLocation(location) {
    return this.apiClient
      .get(`/weather?q=${location}&units=metric&appid=${apiKey}`)
      .then((response) => response.data);
  }
}

const apiClient = new ApiClient();

export default apiClient;
