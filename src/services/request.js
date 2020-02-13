import Axios from 'axios';

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
export const displayAllTag = () => {
  return Axios.get(
    'https://cors-anywhere.herokuapp.com/https://io.tronalddump.api/tag'
  ).then(response => {
    console.log(response);
  });
};
