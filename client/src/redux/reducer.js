import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  POST_COUNTRY,
  GET_ACTIVITIES,
} from "./actions";

const initialState = {
  countries: [],
  country: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, countries: action.payload };
    case POST_COUNTRY:
      return { ...state, activities: action.payload };
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
