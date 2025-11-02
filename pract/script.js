function hello() {
    var showpass = document.getElementById("pass");

    if (showpass) {
        if (showpass.type === "password") {
            showpass.type = "text";
        } else {
            showpass.type = "password";
        }
    } else {
        console.log("Element with id 'pass' not found.");
    }
}