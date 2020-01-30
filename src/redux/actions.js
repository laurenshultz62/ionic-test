// Types
export const IS_LOADING = 'IS_LOADING'
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'
export const SHOW_ALERT = 'SHOW_ALERT'

// Creators
export function setLoading(status) {
    return { type: IS_LOADING, status }
}

export function setAuthenticatedUser(user) {
    return { type: USER_AUTHENTICATED, user }
}

export function showAlert(status, message) {
    return { type: SHOW_ALERT, status, message }
}
