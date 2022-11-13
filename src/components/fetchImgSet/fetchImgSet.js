import axios from 'axios';

const KEY = '30083242-aef3007963a7f6878e8dbc6e6';

const searchParams = new URLSearchParams({
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImgSet = async (query, currentPage) => {
  searchParams.set('q', query);
  searchParams.set('page', currentPage);
  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
};
