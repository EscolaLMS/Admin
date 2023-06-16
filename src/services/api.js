export const getFormData = (data) => {
  const formData = new FormData();

  for (let key in data) {
    if (data[key] != undefined || data[key] != null) {
      if (Array.isArray(data[key])) {
        if (!data[key].length) {
          formData.append(`${key}[]`, '[]');
        }
        for (let value of data[key]) {
          formData.append(`${key}[]`, value);
        }
        continue;
      }

      formData.set(key, data[key]);
    }
  }
  return formData;
};
