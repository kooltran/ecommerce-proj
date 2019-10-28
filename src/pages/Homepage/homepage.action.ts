import { actionTypes } from 'config'
import { homepageApi } from 'api/homepageApi'
import { prodItemData } from '../../ui-kit/ProductItem/ProdItem.data'
import { IProdItem } from 'interfaces/prod-item'

const mockData: IProdItem[] = [
  { id: 1, ...prodItemData },
  { id: 2, ...prodItemData },
  { id: 3, ...prodItemData }
]
export const homepageAction = () => {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.FETCH_INIT_REQUEST })
    return homepageApi()
      .then(res => dispatch({ type: actionTypes.FETCH_INIT_SUCCESS, payload: res }))
      .catch(error => dispatch({ type: actionTypes.FETCH_INIT_FAIL, payload: error }))
  }
}
