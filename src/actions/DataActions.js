// import { GET_DATA, GET_CATEGORIES } from './types';
// import { DataAPI, DataAPI2, GetCategoryAPI } from '../config/Api';

// export const fetchingData = (cateID) => {
//   return (dispatch) => {
//     return fetch(`${DataAPI2}${cateID}`)
//       .then(data => data.json())
//       .then(data => dispatch({
//         type: GET_DATA,
//         payload: data
//       }))
//       .catch(error => console.log(error));
//   };
// };

// export const fetchingCategories = () => {
//   return (dispatch) => {
//     return fetch(GetCategoryAPI)
//       .then(response => response.json())
//       .then(data => dispatch({
//         type: GET_CATEGORIES,
//         payload: data
//       }))
//   }
// }