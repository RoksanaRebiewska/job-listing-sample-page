const config = {
  api: process.env.REACT_APP_API_KEY,
  options: {
    headers: {
      'content-type': 'application/json',
    },
  },
};

const handleResponse = (response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response.json() | 'error');
  }
};

const httpGet = async () => {
  try {
    const response = await fetch(config.api, { ...config.options });
    const data = await handleResponse(response);

    const jobList = Object.keys(data).map((item) => ({
      ...data[item],
    }));

    return jobList;
  } catch (error) {
    throw Error(error);
  }
};

export default { httpGet };
