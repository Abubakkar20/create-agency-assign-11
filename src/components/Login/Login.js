import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import navLogo from '../../images/logos/logo.png'
import firebaseConfig from './firebase.config';
import './Login.css'
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
          const {displayName,email} = result.user;
            // The signed-in user info.
            const signedInUser= {name:displayName, email}
            setLoggedInUser(signedInUser)
            history.replace(from);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <section>
            <div className="login-image"> <img style={{ width: "150px" }} src={navLogo} alt="" /></div>
            <div className="login-page">
                <div style={{ marginTop: "30px" }}>

                    <h3 style={{ marginBottom: "50px" }}>Login with</h3>
                    <button onClick={googleSignIn}>Continue with Google</button>
                    <p>Don't an account?<Link>create account</Link></p>

                </div>
            </div>

        </section>
    );
};

export default Login;