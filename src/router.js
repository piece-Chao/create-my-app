import { Route } from 'react-router-dom';
import React, { Fragment } from 'react'
import App from './screens/App'

export default class extends React.Component {
    render () {
        return (
            <Fragment>
                <Route exact={true} path='/' component={App}></Route>
            </Fragment>
        )
    }
}

