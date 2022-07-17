let request = new XMLHttpRequest();
request.open("POST", "./php/home.php");
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {

        user = JSON.parse(request.responseText);

        document.getElementById("fname").setAttribute('value', user.fname);
        document.getElementById("lname").setAttribute('value', user.lname);
        document.getElementById("email").setAttribute('value', user.email);
        document.getElementById("password").setAttribute('value', user.password);
        document.getElementById("mobile").setAttribute('value', user.mobile);
        document.getElementById("dob").setAttribute('value', user.dob);

    }
}