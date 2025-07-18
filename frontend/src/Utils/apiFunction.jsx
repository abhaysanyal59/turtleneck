import axios from "axios";
import { config } from "../Utils/helpers";

export const fetchData = async (apiEndPoint, apiPayload) => {
  try {
    const result = await axios.post(
      `http://localhost:5004/api/${apiEndPoint}`,
      apiPayload,
      config
    );

    return result?.data; // Return the response body always
  } catch (error) {
    console.error("API Error:", error?.response?.data); // Better than alert
    return null; // Always return something
  }
};
