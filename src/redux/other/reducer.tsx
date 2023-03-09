import { OTHER_STATE } from "./action";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
  type: '',
  message:'',
  status:''
}

export const otherReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case OTHER_STATE.ME:
      return {
        state,
        isLoading: true        
      };
    case OTHER_STATE.ME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.data,
        type: 'me',
        message: action.data?.message ?? 'Something went wrong.',
      };
    case OTHER_STATE.ME_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.data?.message ?? action.error?.message ?? 'Something went wrong.',
        status: action.data?.status ?? action.error?.status ?? 'Something went wrong.',
      };
    case OTHER_STATE.TRACK:
      return {
        state,
        isLoading: true,
      };
    case OTHER_STATE.TRACK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: action.data,
        type: 'track',
        message: action.data?.message ?? 'Something went wrong.',
      };
    case OTHER_STATE.TRACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.data?.message ?? action.error?.message ?? 'Something went wrong.',
        status: action.data?.status ?? action.error?.status ?? 'Something went wrong.',
      };
    default:
      return state;
  }
}