$(document).ready(function () {
  clearInputs();
  $("#buttonGotoCreate").click(function () {
    clearInputs();
    $("#login").css("display", "none");
    $("#userCreator").css("display", "flex");
  });

  $("#buttonCreateUser").click(function () {
    let username = $("userInput").val();
    let password = $("passwordInput").val();

    let user = {
      username: username,
      password: password,
    };

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/createNewUser/";
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        clearInputs();
        $("#userCreator").css("display", "none");
        $("#login").css("display", "flex");
      }
    };
    http.send(JSON.stringify(user));
  });

  $("#buttonGotoLogging").click(function () {
    clearInputs();
    $("#userCreator").css("display", "none");
    $("#login").css("display", "flex");
  });

  $("#buttonLogin").click(function () {
    let username = $("userInput").val();
    let password = $("passwordInput").val();

    let user = {
      username: username,
      password: password,
    };

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/login/";
    http.open("POST", url, true);

    if (http.responseText == true) {
      http.setRequestHeader("Content-type", "application/json");

      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          clearInputs();
          window.location.href = "profile.html";
        }
      };
      http.send(JSON.stringify(user));
    }
  });
  //console.log(myUserManager.loginUser(_username, _password)); //true
  ////////////////////////////////////////////////////////////////

  function clearInputs() {}
});
