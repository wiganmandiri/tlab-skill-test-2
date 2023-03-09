import { OTHER } from '../../services';

export const OTHER_STATE = {
  ME: "ME",
  ME_SUCCESS: "ME_SUCCESS",
  ME_FAILURE: "ME_FAILURE",

  TRACK: "TRACK",
  TRACK_SUCCESS: "TRACK_SUCCESS",
  TRACK_FAILURE: "TRACK_FAILURE",

  RESET: "RESET",
};

export const getDataMe: any = (params: any) => {
  function request(data: any) { return { type: OTHER_STATE.ME, data } }
  function success(data: any) { return { type: OTHER_STATE.ME_SUCCESS, data } }
  function failure(data: any) { return { type: OTHER_STATE.ME_FAILURE, data } }

  return async (dispatch: any, getState: any) => {
    dispatch(request(params));
    try {
      const response = await OTHER.getMe(params)
      // const data: any = response?.data ?? {}
      const data: any = response ?? {}

      dispatch(success(data))

      // if (data.meta.success) {
      //   dispatch(success(data))
      // } else {
      //   dispatch(failure(data))
      // }
    } catch (error: any) {
      dispatch(failure(error?.response?.data ?? error))
    }
  }
}

export const getDataTrack: any = (params: any) => {
  function request(data: any) { return { type: OTHER_STATE.TRACK, data } }
  function success(data: any) { return { type: OTHER_STATE.TRACK_SUCCESS, data } }
  function failure(data: any) { return { type: OTHER_STATE.TRACK_FAILURE, data } }

  return async (dispatch: any, getState: any) => {
    dispatch(request(params));
    try {
      const response = await OTHER.getTrack(params)
      // const data: any = response?.data ?? {}
      const data: any = response ?? {}

      dispatch(success(data))

      // if (data.meta.success) {
      //   dispatch(success(data))
      // } else {
      //   dispatch(failure(data))
      // }
    } catch (error: any) {
      dispatch(failure(error?.response?.data ?? error))
    }
  }
}