$(document).ready(function() {

    // validation start

    $(function() {
        $("#fname_error").hide();
        $("#lname_error").hide();
        $("#email_error").hide();
        $("#password_error").hide();
        $("#mobile_error").hide();
        $("#dob_error").hide();

        var error_fname = false;
        var error_lname = false;
        var error_email = false;
        var error_password = false;
        var error_mobile = false;
        var error_dob = false;

        $("#fname").focusout(function() {
            fname_check();
        });
        $("#lname").focusout(function() {
            lname_check();
        });
        $("#email").focusout(function() {
            email_check();
        });
        $("#password").focusout(function() {
            password_check();
        });
        $("#mobile").focusout(function() {
            mobile_check();
        });
        $("#dob").focusout(function() {
            dob_check();
        });

        // ===================================================================================

        function fname_check() {
            const fname = $("#fname").val();
            var pattern = /^[a-zA-Z]*$/;
            if (fname.trim() == '') {
                $("#fname_msg").show();
                $("#fname_msg").html("Must not be empty!");
                $("#fname_msg").css("color", "red");
                return false;
            }

            if (!pattern.test(fname)) {
                $("#fname_msg").show();
                $("#fname_msg").html("Allowed only characters!");
                $("#fname_msg").css("color", "red");
                return false;
            }

            if (fname.trim().length < 3) {
                $("#fname_msg").show();
                $("#fname_msg").html("Minimum 3 characters required!");
                $("#fname_msg").css("color", "red");
                return false;
            }
            if (fname.trim().length > 15) {
                $("#fname_msg").show();
                $("#fname_msg").html("Maximum length is 15!");
                $("#fname_msg").css("color", "red");
                return false;
            } else {
                $("#fname_msg").hide();
            }
        }

        // ------------------------------------------------------------------------------------------

        function lname_check() {
            const lname = $("#lname").val();
            var pattern = /^[a-zA-Z]*$/;
            if (lname.trim() == '') {
                $("#lname_msg").show();
                $("#lname_msg").html("Must not be empty!");
                $("#lname_msg").css("color", "red");
                return false;
            }

            if (!pattern.test(lname)) {
                $("#lname_msg").show();
                $("#lname_msg").html("Allowed only characters!");
                $("#lname_msg").css("color", "red");
                return false;
            }

            if (lname.trim().length < 1) {
                $("#lname_msg").show();
                $("#lname_msg").html("Minimum 1 characters required!");
                $("#lname_msg").css("color", "red");
                return false;
            }

            if (lname.trim().length > 15) {
                $("#lname_msg").show();
                $("#lname_msg").html("Maximum length is 15!");
                $("#lname_msg").css("color", "red");
                return false;
            } else {
                $("#lname_msg").hide();
            }
        }
        // ------------------------------------------------------------------------------------------------
        // var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        function email_check() {
            const email = $("#email").val();
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (email.trim() == '') {
                $("#email_msg").show();
                $("#email_msg").html("Must not be empty!");
                $("#email_msg").css("color", "red");
                return false;
            }

            if (!pattern.test(email)) {
                $("#email_msg").show();
                $("#email_msg").html("Not a valid email!");
                $("#email_msg").css("color", "red");
                return false;
            } else {
                $("#email_msg").hide();
            }
        }

        // ------------------------------------------------------------------------------------------

        function password_check() {
            const password = $("#password").val();
            // var pattern = /^[a-zA-Z]*$/;
            if (password.trim() == '') {
                $("#password_msg").show();
                $("#password_msg").html("Must not be empty!");
                $("#password_msg").css("color", "red");
                return false;
            }

            if (password.trim().length < 3) {
                $("#password_msg").show();
                $("#password_msg").html("Minimum length is 3 ");
                $("#password_msg").css("color", "red");
                return false;
            } else {
                $("#password_msg").hide();
            }
        }

        // ------------------------------------------------------------------------------------------------------
        function mobile_check() {
            const mobile = $("#mobile").val();
            var pattern = /^[a-zA-Z]*$/;
            if (mobile.trim() == '') {
                $("#mobile_msg").show();
                $("#mobile_msg").html("Must not be empty!");
                $("#mobile_msg").css("color", "red");
                return false;
            }

            if (pattern.test(mobile)) {
                $("#mobile_msg").show();
                $("#mobile_msg").html("Allowed only numbers!");
                $("#mobile_msg").css("color", "red");
                return false;
            }

            if (mobile.trim().length < 10 || mobile.trim().length > 10) {
                $("#mobile_msg").show();
                $("#mobile_msg").html("Length must be 10!");
                $("#mobile_msg").css("color", "red");
                return false;
            } else {
                $("#mobile_msg").hide();
            }
        }

        // -----------------------------------------------------------------------------------

        function dob_check() {
            const dob = $("#dob").val();
            // var pattern = /^[a-zA-Z]*$/;
            if (dob.trim() == '') {
                $("#dob_msg").show();
                $("#dob_msg").html("Must not be empty!");
                $("#dob_msg").css("color", "red");
                return false;
            } else {
                $("#dob_msg").hide();
            }
        }

    });


    // validation ends


});