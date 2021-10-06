
$(document).ready(function () {
    //console.log(myUserManager.getUser(_username))
    clearInputs()
    $("#buttonLogOut").click(function () {
        window.location.href = "login.html"
    });

    $("#buttonGotoUpdate").click(function () {
        clearInputs()
        $("#profile").css("display","none");
        $("#profileUpdater").css("display","flex");
    });

    $("#buttonUpdate").click(function () {
        //myUserManager.updateUser(_username, _newPassword, _newEmail, _newAge)
    /////////////////////////////////////////////////////////
        $("#profileUpdater").css("display","none");
        $("#profile").css("display","flex");
    });

    $("#buttonGotoProfile").click(function () {

        $("#profileUpdater").css("display","none");
        $("#profile").css("display","flex");
    });

    function clearInputs(){

    }
})


