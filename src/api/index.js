import config from './config';

const prepareFetchUrl = ({ timestamp }) => {
  let url = `${config.API_URL}?limit=${config.LIMIT_MESSAGES}&token=${config.TOKEN}`;
  if (timestamp) {
    url += `&timestamp=${timestamp}`;
  }
  return url;
};

class API {
  static getMessages({ timestamp }) {
    return new Promise((resolve, reject) => {
      fetch(prepareFetchUrl({ timestamp }))
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
  static saveMessage(body) {
    return new Promise((resolve, reject) => {
      fetch(config.API_URL, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token: config.TOKEN
        },
      })
        .then((res) => res.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }
}

export default API;