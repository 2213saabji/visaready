import {createSelector} from 'reselect';

// Basic selector to get the auth state
const selectAuthState = state => state.auth;

// Selector to get the Authentication report
export const selectIsAuthenticated = createSelector([selectAuthState], auth => auth.isAuthenticated);

// Selector to get the user
export const selectUser = createSelector([selectAuthState], auth => auth.user);

// Selector to get the token
export const selectToken = createSelector([selectAuthState], auth => auth.token);

// Selector to get the loading state
export const selectLoading = createSelector([selectAuthState], auth => auth.loading);

// Selector to get the error
export const selectError = createSelector([selectAuthState], auth => auth.error);

// Selector to get the message
export const selectMessage = createSelector([selectAuthState], auth => auth.message);
