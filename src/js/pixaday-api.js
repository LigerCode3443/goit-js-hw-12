import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getPhotos(query, page) {
  const params = {
    params: {
      key: '43997629-57ebc47830964b917ccbc0cb3',
      q: query,
      per_page: 15,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };
  return axios.get('', params);
}
// !===========
