import mockAPI from '../api/mockAPI.json';

// Get products
export const getProducts = () => async dispatch => {
    dispatch({
      type: 'GET_PRODUCTS',
      payload: mockAPI,
    });
}