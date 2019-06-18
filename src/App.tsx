import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // RouteComponentProps,
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

const store = configureStore()

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
