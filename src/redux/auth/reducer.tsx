import { LOGIN_STATE } from "./action";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {}
}

export const authReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_STATE.LOGIN:
      return {
        state,
        isLoading: true,
        data: action.data
      };
    case LOGIN_STATE.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.data?.meta?.message ?? action.data?.message ?? 'Something went wrong.',
      };
    case LOGIN_STATE.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.data?.meta?.message ?? action.data?.message ?? action.error?.message ?? 'Something went wrong.',
      };
    default:
      return state;
  }
}