import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings"
import { getUserId } from "../../utils/axios"

const { Pending, Rejected, Fulfilled } = ActionType;

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
      console.log(result.data.data.email)
      dispacth(profileFulfilled(result.data));
      if (typeof router === "function") router();
    } catch (error) {
      console.log(error);
      dispacth(profileRejected(error));
    }
  };
};


const logoutThunk = (token, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      const result = await logout(token);
      // console.log(result);
      dispatch(logoutFulfilled(result.data));
      console.log(result);
      localStorage.setItem("userInfo", JSON.stringify());
      if (typeof navigate === "function") navigate();
    } catch (error) {
      dispatch(logoutRejected(error))
    }
  }
}

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

const authActions = {
  userThunk,
  logoutThunk,
  resetThunk,
};

export default authActions;