import axios from "axios";

import { network } from "_constants";

const request = async function(options = {}) {
  let newOptions = { ...options, method: "POST" };
  // console.log("newOptions: ", newOptions);

  const client = axios.create({
    baseURL: network.BASE_URL,
    headers: null
  });

  const onSuccess = function(response) {
    // console.log("Request Succesful", response);
    return response.data;
  };

  const onError = function(error) {
    // console.log("Request Failed: ", error.config);
    if (error.response) {
      // console.log("Status: ", error.response.status);
      // console.log("Data: ", error.response.status);
      // console.log("Headers: ", error.response.headers);
    } else {
      // console.log("Error Message: ", error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client(newOptions)
    .then(onSuccess)
    .catch(onError);
};

export default request;
