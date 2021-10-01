
$(document).ready(function () {
    clearInputs()
    $("#buttonGotoCreate").click(function () {
        clearInputs()
        $("#login").css("display","none");
        $("#userCreator").css("display","flex");
    });

    $("#buttonCreateUser").click(function () {
        

        clearInputs()
        $("#userCreator").css("display","none");
        $("#login").css("display","flex");
    });

    $("#buttonGotoLogging").click(function () {
        clearInputs()
        $("#userCreator").css("display","none");
        $("#login").css("display","flex");
    });

    $("#buttonLogin").click(function () {
        window.location.href = "profile.html"
    });

    function clearInputs(){

    }
})



