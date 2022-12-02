import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings"

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
  userInfo: {
    id: null,
    token: null,
    email: null,
    role: null,
  },
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { authRegister, authLogin, authLogout, authReset } = ACTION_STRING;
  switch (type) {
    case authRegister.concat("_", Pending):
    return {
      ...prevState,
      isLoading: true,
      isError: false,
      isFulfilled: false,
    };
    case authRegister.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.msg,
      };
    case authRegister.concat("_", Fulfilled):
        return {
          ...prevState,
          registeredFulfilled: true,
          isLoading: false,
        }
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case authLogin.concat("_", Rejected):
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.msg,
      };
    case authLogin.concat("_", Fulfilled):
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
        userInfo: {
          id: payload,
          token: payload,
          email: payload,
          role: payload,
        }
      };
    case authLogout.concat("_", Pending):
      return {
          ...prevState,
          isLoading: true,
          isError: false,
          isFulfilled: false,
      };
    case authLogout.concat("_", Rejected):
      return {
          ...prevState,
          isError: true,
          isLoading: false,
          error: payload.error,
      };
    case authLogout.concat("_", Fulfilled):
      return initialState;
      default:
        return prevState
      case authReset.concat("_", Pending):
        return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
        };
      case authReset.concat("_", Rejected):
        return {
            ...prevState,
            isError: true,
            isLoading: false,
            error: payload.error.response.data.msg,
        };
      case authReset.concat("_", Fulfilled):
        return {
            ...prevState,
            isFulfilled: false,
            isLoading: true,
        };
  }
}

export default authReducer;