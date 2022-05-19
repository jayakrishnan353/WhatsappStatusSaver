import axios from 'axios';
import ApiConfig from "app/config/api-config";
//const BASE_URL: 'http://128.199.218.46/api', // --------------->LIVE
import apiClient from 'app/services/client';
//const LOGIN: 'events/loginEvent',

var base = 'http://188.166.216.146:3000/';



export const postAPI = async (name, data) => {
  var finalResponse;

  await apiClient.post(name, data).then(
    (response) => {
      if (response.status === 200) {

        console.log('response>', response.data);
        finalResponse = response.data;
      }
    },
    (error) => {

      console.log('error', error);
    },
  );
  return await finalResponse;
};

export const getAPI = async (name) => {
  var finalResponse;



  await apiClient.get(name).then(
    (response) => {
      if (response.status === 200) {
        console.log('response>', response.data);
        finalResponse = response.data;

      }
    },
    (error) => {

      console.log('error', error);
    },
  );

  return await finalResponse;
};
export const setAuth = (token) => {
  console.log('Header Token', token);
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  console.log('bear', axios.defaults.headers.Authorization);
};

//userId, deviceId, securityToken
export const upload = async (url, data) => {
  var finalResponse;
  console.log("sfdsdfghjkl;sdfghjkl;dfghjkl;dfghjkl;dfghjkldfghjklghjk", url, data);

  let options = {
    headers: {
      'Content-Type': 'multipart/form-data',
      //'device-id': deviceId,
      //'security-token': securityToken,
    },
    method: 'post',
  };

  options.body = new FormData();
  for (let key in data) {
    options.body.append('image', data[key]);
  }
  //options.body.append('user_id', userId);

  await axios
    .post(base + url, options)
    .then(response => {
      console.log('response>', response.data);
      finalResponse = response.data;

    })
    .catch(error => {
      console.log('error>', error.response.data);
    });
  return await finalResponse;
};
