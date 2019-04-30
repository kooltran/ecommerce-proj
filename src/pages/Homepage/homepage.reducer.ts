import { actionTypes } from 'config'

export interface IHomePageReducer {
  initRequest: boolean
  initSuccess: boolean
  initFail: boolean
  data: any
  error: any
}

const initialState = {
  initRequest: false,
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
        initSuccess: true,
        data: action.payload,
      }
    case actionTypes.FETCH_INIT_FAIL:
      return {
        ...state,
        initFail: true,
        error: action.payload,
      }
    default:
      return state
  }
}
