/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HomeCompoment from './page/Home/HomeCompoment'
import reducer from './reduces/appReduces'

const store = createStore( reducer )

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <HomeCompoment />
            </Provider>
        )
    }
}
module.exports = App;

