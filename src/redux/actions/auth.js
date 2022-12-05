import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings"
import { getUserId, logout } from "../../utils/axios"

const { Pending, Rejected, Fulfilled } = ActionType;


// Logout
const logoutPending = () => () => ({
  type: ACTION_STRING.authLogout.concat("_", Pending),
});
const logoutRejected = (error) => ({
  type: ACTION_STRING.authLogout.concat("_", Rejected),
  payload: { error },
});
const logoutFulfilled = (data) => ({
  type: ACTION_STRING.authLogout.concat("_", Fulfilled),
  payload: { data },
});



const logoutThunk = (token, router) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      dispatch(logoutFulfilled(result.data));
      if (typeof router === "function") router();
    } catch (error) {
      dispatch(logoutRejected(error))
    }
  }
}




// Reset
const resetPending = () => () => ({
  type: ACTION_STRING.authReset.concat("_", Pending),
});
const resetRejected = (error) => ({
  type: ACTION_STRING.authReset.concat("_", Rejected),
  payload: { error },
});
const resetFulfilled = (data) => ({
  type: ACTION_STRING.authReset.concat("_", Fulfilled),
  payload: { data },
});


const resetThunk = (body, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(resetPending());
      const result = await reset(body);
      dispatch(resetFulfilled(result.data));
      console.log(result);
    } catch (error) {
      dispatch(resetRejected(error))
    }
  }
}




// Get id user
const profilePending = () => ({
  type: ACTION_STRING.profile.concat("_", Pending),
});
const profileRejected = (error) => ({
  type: ACTION_STRING.profile.concat("_", Rejected),
  payload: { error },
});
const profileFulfilled = (data) => ({
  type: ACTION_STRING.profile.concat("_", Fulfilled),
  payload: { data },
});


const userThunk = (token, router) => {
  return async (dispacth) => {
    try {
      dispacth(profilePending());
      const result = await getUserId(token);
      dispacth(profileFulfilled(result.data));
      if (typeof router === "function") router();
    } catch (error) {
      console.log(error);
      dispacth(profileRejected(error));
    }
  };
};


// Booking
const bookingFulfilled = (body) => ({
  type: ACTION_STRING.booking.concat("_", Fulfilled),
  payload: { body },
});


const bookingThunk = (body, router) => {
  return async (dispacth) => {
    try {
      dispacth(bookingFulfilled(body));
      if (typeof router === "function") router();
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
};



const authActions = {
  userThunk,
  logoutThunk,
  resetThunk,
  bookingThunk,
};

export default authActions;