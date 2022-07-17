let request = new XMLHttpRequest();
request.open("POST", "./php/home.php");
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        user = JSON.parse(request.responseText);
        document.getElementById("name").innerHTML = "Welcome" + " " + user.fname;
        document.getElementById("fname").innerHTML = user.fname;
        document.getElementById("lname").innerHTML = user.lname;
        document.getElementById("email").innerHTML = user.email;
        document.getElementById("password").innerHTML = user.password;
        document.getElementById("mobile").innerHTML = user.mobile;
        document.getElementById("dob").innerHTML = user.dob;
    }
}