import { INPUT_MIN, INPUT_MAX } from "./Utils/constants";

export const API_URL = "https://us-central1-ss-devops.cloudfunctions.net";

export function GET_RANDOM_NUMBER() {
  return {
    url: `${API_URL}/rand?min=${INPUT_MIN}&max=${INPUT_MAX}`,
    options: {
      method: "GET",
    },
  };
}
