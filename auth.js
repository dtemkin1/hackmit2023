//import google platform library
<script src="https://apis.google.com/js/platform.js" async defer></script>

//client id shizzles
<meta name="google-signin-client_id" content="439284619534-nhjbkksdh79ujfjrlhhog4jpqv32svl0.apps.googleusercontent.com.apps.googleusercontent.com"></meta>

//class for u to add button to navbar and yassify it
<div class="g-signin2" data-onsuccess="onSignIn"></div>

//apparently u can get stuff without using a database anyway signing in function cute and quirky
//to Get Stuff TM use getBasicProfile()
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); //lowkey shouldn't be sent to backend #cybersecurity
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

//creates a signout link using Google.signOut() function, also add under navbar i think lmao
<a href="#" onclick="signOut();">Sign out</a>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>
