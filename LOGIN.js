// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAU5JuAJtjEnQzSgxBAG8sCMYCqBD5UVpA",
    authDomain: "asi-login.firebaseapp.com",
    projectId: "asi-login",
    storageBucket: "asi-login.appspot.com",
    messagingSenderId: "1008030920521",
    appId: "1:1008030920521:web:062f86d531457f3c7df498"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()

  function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    var user_ref = database.ref('accounts/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      var detectuser = data.username
      var user_ref = database.ref('accounts/' + username)
        user_ref.on('value', function(snapshot) {
            var detectpassword = data.password
            if (detectuser == username && detectpassword == password){
                alert("LOGIN SUCCESS\n Welcome " + data.username)
                window.close('./weblogin.html')
                window.open('./web.html')
              }
              else {
                alert("Account not found!")
              }
        })
    })
    
  }

  function register(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    database.ref('accounts/' + username).set({
        username : username,
        password : password,
      })
    
      alert('Saved')
  }