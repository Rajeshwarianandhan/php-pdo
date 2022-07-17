$(document).ready(function() {


    $("#signup").click(function() {


        const fname = $("#fname").val();
        const lname = $("#lname").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const mobile = $("#mobile").val();
        const dob = $("#dob").val();



        if (fname == '' || lname == '' || email == '' || password == '' || mobile == '' || dob == '') {
            alert("All fields are required");
        } else {
            $.ajax({
                type: 'POST',
                url: "../php/php/index.php",
                data: $(signup_form).serialize(),
                dataType: 'JSON',
                success: function(data) {
                    if (data.status == 'error') {
                        alert("Given Email is already exist try different one!");
                    } else if (data.status == 'success') {
                        // alert("Data inserted successfully");
                        window.location = "login.html";
                    } else {
                        alert("nothing");
                    }
                    $("#signup_form")[0].reset();
                }
            });
        }

    });

});