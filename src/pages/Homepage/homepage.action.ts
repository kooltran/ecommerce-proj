import { actionTypes } from 'config/constants'
import { homepageApi } from 'api/homepageApi'

export const homepageAction = () => {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.FETCH_INIT_REQUEST })
    return homepageApi()
      .then(res => dispatch({ type: actionTypes.FETCH_INIT_SUCCESS, res }))
      .catch(error => dispatch({ type: actionTypes.FETCH_INIT_FAIL, error }))
  }
}
