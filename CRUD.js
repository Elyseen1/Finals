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
  
  function save() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var studid = document.getElementById('studid').value
    var section = document.getElementById('section').value
  
    database.ref('users/' + studid).set({
      firstname : fname,
      lastname : lname,
      studentID : studid,
      section : section,
    })
  
    alert('Saved')
  }
  
  function get() {
    var studid = document.getElementById('studid').value

    var user_ref = database.ref('users/' + studid)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert('Student Name: '+ data.firstname + " " +data.lastname + '\nSection: ' + data.section + '\nStudent ID: ' + data.studentID)
  
    })
  
  }
  
  function update() {
    var updateID = document.getElementById('updateID').value
    //Deleting before updating
    var studid = updateID
    database.ref('users/' + studid).remove()

    var studids = document.getElementById('studid').value
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var section = document.getElementById('section').value
  
    var updates = {
        firstname : fname,
        lastname : lname,
        studentID : studids,
        section : section,
    }

    
    database.ref('users/' + studids).update(updates)
  
    alert('Updated')
  }
  
  function remove() {
    var deleteID = document.getElementById('deleteID').value
    var studid = deleteID
    database.ref('users/' + studid).remove()
  
    alert('deleted')
  }

  function logout() {
    window.close("./web.html")
    window.open("./weblogin.html")
  }