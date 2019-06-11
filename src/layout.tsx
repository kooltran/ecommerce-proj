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
import {TopBar} from './container/TopBar'
import {Nav} from './container/Nav'
import {BreadScrumb} from './ui-kit/BreadScrumb'
import {Footer} from './ui-kit/Footer'

const store = configureStore()

export default class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper">
            <TopBar />
            logo
            <div className="main d-flex">
              <Nav />
              <div className="main-content">
                <BreadScrumb />
                  <Switch>
                    <Route path="/" component={Homepage} />
                  </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
