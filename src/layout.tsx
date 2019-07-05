import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // RouteComponentProps,
} from 'react-router-dom'
import Homepage from 'pages/Homepage'
import configureStore from '../src/redux/store'
import { Provider } from 'react-redux'
import { Container } from 'react-bootstrap'

const store = configureStore()

export default class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router>
            <Switch>
              <Route path="/" component={Homepage} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    )
  }
}
