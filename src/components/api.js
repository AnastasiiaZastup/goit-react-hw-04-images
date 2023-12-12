import axios from 'axios';

const KEY_MY = '39915563-624de55954f525a041c98bd73';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImage = async (query, page) => {
  
  const response = await axios.get(`/?q=${query}&page=${page}&key=${KEY_MY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};
