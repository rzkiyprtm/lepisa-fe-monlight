import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings"

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
  profile: {
    email: null,
    firstname: null,
    lastname: null,
    phone_number: null,
    image: null,
    status: null,
    point: null,
  },
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { authLogout, authReset, profile } = ACTION_STRING;
  switch (type) {

    // profile
    case profile.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
        error: null,
      };
    case profile.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data.status,
      };
    case profile.concat("_", Fulfilled):
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        error: null,
        profile: {
          email: payload.data.data.email,
          firstname: payload.data.data.first_name,
          lastname: payload.data.data.last_name,
          phone_number: payload.data.data.phone_number,
          image: payload.data.data.image,
          status: payload.data.data.status,
          point: payload.data.data.point
        },
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