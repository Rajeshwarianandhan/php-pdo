$(document).ready(function() {

    $("#signin").click(function() {
        // alert("button clicked");
        const email = $("#email").val();
        const password = $("#password").val();

        if (email == '' || password == '') {
            alert("All fields are required");
        } else {
            $.ajax({
                type: 'POST',
                url: "../php/php/login.php",
                data: $("#signin_form").serialize(),
                dataType: 'JSON',
                success: function(data) {
                    if (data.status == 'success') {
                        // alert("Login success");
                        window.location = "home.html";
                    } else if (data.status == 'emailError') {
                        // alert("Invalid Email");
                        $("#emailError").html("Given Email is not found!");
                        $("#emailError").css("color", "red");
                    } else {
                        // alert("Invalid Password");
                        $("#passError").html("Password does't match!");
                        $("#passError").css("color", "red");
                    }
                    $("#signin_form")[0].reset();
                }

            });
        }
    });
});