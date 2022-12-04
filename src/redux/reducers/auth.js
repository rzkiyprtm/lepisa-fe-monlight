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
  payment: {
    schedule_id: null,
    title: null,
    price: 0,
    time: null,
    date: null,
    seat: null,
    total_payment: null,
    payment_method: null,
    cinema_image: null,
    cinema_name: null,
    total_ticket: 0
  }
};

const authReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { authLogout, authReset, profile, booking } = ACTION_STRING;
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


      // booking
      case booking.concat("_", Fulfilled):
        return {
          ...prevState,
          payment: {
            schedule_id: payload.body.schedule_id,
            title: payload.body.title,
            price: payload.body.price,
            time: payload.body.time,
            date: payload.body.date,
            seat: payload.body.seat,
            total_payment: payload.body.total_payment,
            payment_method: payload.body.payment_method,
            cinema_image: payload.body.cinema_image,
            cinema_name: payload.body.cinema_name,
            total_ticket: payload.body.total_ticket,
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