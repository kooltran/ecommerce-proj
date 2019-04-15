import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // RouteComponentProps,
} from 'react-router-dom'
import Homepage from '../src/pages/Homepage'
import configureStore from '../src/redux/store'
import { Provider } from 'react-redux'

const store = configureStore()

export default class Layout extends React.Component<{}, {}> {
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
