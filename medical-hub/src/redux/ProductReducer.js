import { GET_COMBO, GET_DISEASE, GET_MEDICINE, GET_PRODUCT,CART_SUCCESS } from "./ProductType";

const initialState = {
  data: [],
  data1:[],
  data2:[],
  data3:[],
  cart: [],
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        data: payload,
      };
    }

    case GET_COMBO:{
      return{
        ...state,
        data1:payload
      }
    }

    case GET_MEDICINE:{
      return{
        ...state,
        data2:payload
      }
    }

    case GET_DISEASE:{
      return{
        ...state,
        data3:payload
      }
    }
    case CART_SUCCESS: {
      return {
        ...state,
        cart: payload,
      };
    }
    


    default: {
      return state;
    }
  }
};

export default ProductReducer;
