import React from 'react'

import {Route} from 'react-router-dom'

interface RedirectType {
    to: () => void
}


const ExternalRedirect = ({to, ...routeProps}:RedirectType) => {
    return (
     <Route {...routeProps} render={() =>  to} />
    )
}

export default ExternalRedirect
