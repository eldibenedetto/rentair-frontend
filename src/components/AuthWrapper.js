import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Loading from './Loading'

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => !!localStorage.getItem('token'),
  wrapperDisplayName: 'UserIsAuthenticated',
  // Returns true if the user auth state is loading
  authenticatingSelector: state => state.manageUser.loading,
  // Render this component when the authenticatingSelector returns true
  AuthenticatingComponent: Loading
})

export const userIsNotAuthenticated = connectedRouterRedirect({

  redirectPath: '/profile',

  allowRedirectBack: false,

  authenticatedSelector: state => !state.manageUser.user,

  wrapperDisplayName: 'UserIsNotAuthenticated'
})

export default { userIsAuthenticated, userIsNotAuthenticated }
