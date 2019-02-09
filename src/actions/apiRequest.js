import { backendConfig } from "../utils/config";

const apiRequest = async (apiPath, options) => {
  const mainOptions = {
    method: options.method,
    headers: {
      Accept: "application/json"
    },
    mode: "cors"
  };

  const requestUrl = `http://${backendConfig.hostname}:${
    backendConfig.port
  }/api/${apiPath}`;

  const response = await fetch(requestUrl, mainOptions);

  const body = await response.text();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return JSON.parse(body);
};

export default apiRequest;
