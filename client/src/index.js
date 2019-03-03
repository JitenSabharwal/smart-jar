import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import indexRoutes from './routes/index.jsx'
import { configureStoreAsync } from './store'

const hist = createBrowserHistory()

configureStoreAsync().then((store) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />
          })}
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
