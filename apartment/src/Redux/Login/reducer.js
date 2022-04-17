import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initState = {
  loading: false,
  isAuthenticated: false,
  token: "",
  error: false,
};

export const loginReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        isAuthenticated: true,
        token: payload,
        error: false,
      };
    case LOGIN_FAILURE:
      return { ...store, loading: false, isAuthenticated: false, error: true };
    default:
      return store;
  }
};
