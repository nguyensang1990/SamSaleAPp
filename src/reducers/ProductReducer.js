import products from '../data/products.json';
export default () => products;

// import { DuckData } from '../data/Duck'

// import { GET_DATA, GET_CATEGORIES } from '../actions/types';

// const INITIAL_STATE = {
//   loadingData: false,
//   data: [],
//   categories: []
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case GET_DATA:
//       console.log(state.data)
//       return { ...state, loadingData: false, data: action.payload };
//     case GET_CATEGORIES:
//       return { ...state, loadingData: false, categories: action.payload };

//     default: return state;
//   }
// };
