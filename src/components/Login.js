import React from "react";
import { useHistory } from "react-router-dom";
import auth from "./Auth";
import swal from "sweetalert";

import { GoogleLogin } from "react-google-login";

const client_id =
  "104193676030-pbrvvat408940tg2gue7hheeis6mpmk8.apps.googleusercontent.com";

const LoginPage = () => {
  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false,
    );
  }

  const onSuccess = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + profile.getName());
    var checkname = profile.getName();
    sessionStorage.setItem("checkname", checkname);
    //console.log('Image URL: ' + profile.getImageUrl());
    //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var checkemail = profile.getEmail();
    sessionStorage.setItem("checkemail", checkemail);

    auth.login(() => {
      history.push("/systemcheck");
    });
  };

  const onFaliure = (res) => {
    swal("Login Failed", "Kindly try again.", "error");
    console.log("[Login Success] res:", res);
  };

  const history = useHistory();

  return (
    <div>
      <head>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>

        <meta
          name="google-signin-client_id"
          content="104193676030-pbrvvat408940tg2gue7hheeis6mpmk8.apps.googleusercontent.com"
        ></meta>
      </head>
      <header className="App-header">
        <h1>Login</h1>

        <GoogleLogin
          clientId={client_id}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFaliure}
          prompt="select_account"
          // cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
      </header>
    </div>
  );
};

export default LoginPage;
