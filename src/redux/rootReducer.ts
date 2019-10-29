import { combineReducers } from 'redux'
import homeReducer, {
  IHomePageReducer,
} from '../pages/Homepage/homepage.reducer'

export default combineReducers({
  homeReducer,
})

// export default () => null
