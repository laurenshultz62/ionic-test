import { ApiHelper } from '../helpers/ApiHelper'
import axios from 'axios';
import { 
  setLoading,
  setAuthenticatedUser,
  showAlert
 } from './actions'

const mapDispatchToProps = dispatch => {
    return {
      authenticateSignin: (email, password) => {
        console.log("Authenticate User")
        dispatch(setLoading(true))
        axios.post(ApiHelper.AUTHENTICATE_SIGNIN(), { username: email, password })
        .then(function (response) {
            console.log("Success! " + response);
            dispatch(setAuthenticatedUser({
              first_name: "Test",
              last_name: "User",
              email
            }))
            dispatch(setLoading(false))
        })
        .catch(function (error) {
            console.log("error" + error);
            dispatch(showAlert(true, "There was an issue logging in."))
            dispatch(setLoading(false))
        });
      },
      setShowAlert: (status, message) => {
        console.log("Set show alert")
        dispatch(showAlert(status, message))
      }
    }
}

export default mapDispatchToProps;
