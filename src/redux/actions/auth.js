import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "./actionStrings"

const { Pending, Rejected, Fulfilled } = ActionType;

const registerPending = () => () => ({
  type: ACTION_STRING.authRegister.concat("_", Pending),
});
const registerRejected = (error) => ({
  type: ACTION_STRING.authRegister.concat("_", Rejected),
  payload: { error },
});
const registerFulfilled = (data) => ({
  type: ACTION_STRING.authRegister.concat("_", Fulfilled),
  payload: { data },
});

const loginPending = () => () => ({
  type: ACTION_STRING.authLogin.concat("_", Pending),
});
const loginRejected = (error) => ({
  type: ACTION_STRING.authLogin.concat("_", Rejected),
  payload: { error },
});
const loginFulfilled = (data) => ({
  type: ACTION_STRING.authLogin.concat("_", Fulfilled),
  payload: { data },
});

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

const registerThunk = (body) => {
  return async (dispatch) => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      dispatch(registerFulfilled(result.data))
    } catch (error) {
      dispatch(registerRejected(error))
    }
  }
}

const loginThunk = (body, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      console.log(result);
      localStorage.setItem("userInfo", JSON.stringify());
      if (typeof navigate === "function") navigate();
    } catch (error) {
      dispatch(loginRejected(error))
    }
  }
}

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
  registerThunk,
  loginThunk,
  logoutThunk,
  resetThunk,
};

export default authActions;