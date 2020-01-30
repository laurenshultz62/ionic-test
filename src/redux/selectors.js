import { createSelector } from 'reselect'

const getCurrentUser = state => state.currentUser
const getTerminals = state => state.terminals
const getShouldShowAlert = state => state.shouldShowAlert
const getAlertMessage = state => state.alertMessage

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state),
    terminals: getTerminals(state),
    shouldShowAlert: getShouldShowAlert(state),
    alertMessage: getAlertMessage(state)
  }
}

export default mapStateToProps;
