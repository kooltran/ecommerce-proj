import { actionTypes } from 'config/constants'

export interface IHomePageReducer {
  initRequest: boolean
  initSuccess: boolean
  initFail: boolean
  data: any
  error: any
}

const initialState = {
  initRequest: true,
  initSuccess: false,
  initFail: false,
  data: {},
  error: null,
}

export default function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_INIT_REQUEST:
      return {
        ...state,
        initRequest: true,
      }
    case actionTypes.FETCH_INIT_SUCCESS:
      return {
        ...state,
        initRequest: false,
        initSuccess: false,
        data: action.res,
      }
    case actionTypes.FETCH_INIT_FAIL:
      return {
        ...state,
        initFail: true,
        error: action.res,
      }
    default:
      return state
  }
}
