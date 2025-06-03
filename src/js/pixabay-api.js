//*функція для HTTP-запиту

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43437392-3f8254e7ae10b5746fbcc03c6';

export const searchImages = query => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 5,
    safesearch: true,
  });

  const url = `${BASE_URL}?${urlParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
};
