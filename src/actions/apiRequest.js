import { backendConfig } from "../utils/config";
import { get } from "lodash";

const solveErrors = response => {
  const contentType = response.headers.get("content-type");
  const result =
    contentType && contentType.includes("json")
      ? response.json()
      : response.text();

  return result.then((parsed: any) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(parsed);
    }

    const error = {
      status: response.status,
      errorCode: get(parsed, "error_code"),
      detail: get(parsed, "detail")
    };

    return Promise.reject(error);
  });
};

const apiRequest = (apiPath, options) => {
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

  return fetch(requestUrl, mainOptions).then(response => solveErrors(response));
};

export default apiRequest;
