import { combineReducers } from 'redux'
import homeReducer, {
  IHomePageReducer,
} from '../pages/Homepage/homepage.reducer'

interface IReducers {
  [propName: string]: any
}

export default combineReducers<IReducers>({
  homeReducer,
})

// export default () => null
