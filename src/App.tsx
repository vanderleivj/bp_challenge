import AppRoutes from './core/routes'
import { GlobalStyle } from './core/styles/global'

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './core/reducers/index';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={ store }>
      <GlobalStyle />
      <AppRoutes />
    </Provider>
  )
}

export default App
