
export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};