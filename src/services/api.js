export const APIpath = (action) => `http://localhost:1000/api/${action}`;

export const API = (action, token, method = 'GET', data = null) => {
  const opts = {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    // mode: "no-cors",
    // credentials: 'include',
  };
  if (data) {
    opts.body = data;
  } else {
    opts.headers['Content-Type'] = 'application/json';
  }
  return fetch(APIpath(action), opts);
};

export const getFormData = (data) => {
  console.log('getFromData', data);
  const formData = new FormData();

  for (let key in data) {
    if (data[key] != undefined || data[key] != null) {
      formData.set(key, data[key]);
    }
  }
  return formData;
};

export default API;
