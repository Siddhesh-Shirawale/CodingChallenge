import ACTION_TYPES from "./company.actions.js";

const initialState = {
   list: [],
};

export const companyReducer = (state = initialState, action) => {
   switch (action.types) {
      case ACTION_TYPES.FETCH_ALL:
         return {
            ...state,
            list: [...action.payload],
         };

      default:
         return state;
   }
};
