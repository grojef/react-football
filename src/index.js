import React from 'react'
import {render} from 'react-dom'

import App from './containers/App'

import {createStore} from 'redux'

import {Provider} from 'react-redux'

import reducer from './reducers'

import * as actions from './actions'

import './assets/styles/media10px.css'
import './assets/styles/rem-base.css'
import './assets/styles/iconfont/iconfont.css'
import './assets/styles/toutiao-index.css'
import './assets/styles/kmodal.css'
import './assets/styles/style.css'


const store  = createStore(reducer)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
)
