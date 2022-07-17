$(document).ready(function() {

    // validation start



    // validation end

    $("#update").click(function() {

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
                type: "POST",
                url: "./php/edit.php",
                data: { "fname": fname, "lname": lname, "email": email, "password": password, "mobile": mobile, "dob": dob },
                dataType: 'JSON',
                success: function(feedback) {
                    if (feedback.status === "success") {
                        window.location = "home.html";
                    } else if (feedback.status === "error") {
                        alert(" Updatation Error");
                    }
                }

            });
        }
    });

});