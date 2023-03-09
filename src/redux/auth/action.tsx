import { AUTH } from '../../services';

export const LOGIN_STATE = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  RESET: "RESET",
};

export const connect: any = (params: any) => {
  function request(data: any) { return { type: LOGIN_STATE.LOGIN, data } }
  function success(data: any) { return { type: LOGIN_STATE.LOGIN_SUCCESS, data } }
  function failure(data: any) { return { type: LOGIN_STATE.LOGIN_FAILURE, data } }

  return async (dispatch: any, getState: any) => {
    dispatch(request(params));
    try {
      const response = await AUTH.login(params)
      // await fails()
      const data: any = response?.data ?? {}
      console.log('response coy', response)
      // const token = response?.token ?? {}
      if (data.meta.success) {
        // dispatch(success(data, token))
        dispatch(success(data))
      } else {
        dispatch(failure(data))
      }
    } catch (error: any) {
      dispatch(failure(error?.response?.data ?? error))
    }
  }
}