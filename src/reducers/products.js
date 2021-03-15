const initialState = {
  products: [],
  currency: '',
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: payload.items,
        currency: payload.currency
      };
    default:
      return state;
  }
};
