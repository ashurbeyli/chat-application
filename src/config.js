const config = {
  API_URL: 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/',
  TOKEN: 'sySt29CMMLV4',
  LIMIT_MESSAGES: 10
};

export const prepareFetchUrl = ({ timestamp }) => {
  let url = `${config.API_URL}?limit=${config.LIMIT_MESSAGES}&token=${config.TOKEN}`;
  if (timestamp) {
    url += `&timestamp=${timestamp}`;
  }
  return url;
};

export default config;