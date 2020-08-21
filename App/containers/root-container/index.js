import React, { Component } from 'react'
import { AppNavigation, NavigationService } from '@app/navigations'

class RootContainer extends Component {
    render() {
        return (
            <AppNavigation
                ref={NavigationService.navigator.bind(this)}
            />
        )
    }
}

export default RootContainer
