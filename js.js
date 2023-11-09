document.getElementById("button2").onclick = function() {
    document.getElementById("button2").style.display = "none";
    document.getElementById("loginPopup").style.display = "block";
};

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("welcomePopup").style.display = "block";
};

document.getElementById("tryButton").onclick = function() {
    document.getElementById("welcomePopup").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
};

document.getElementById("loginForm2").onsubmit = function () {
    event.preventDefault();
    var enteredUsername = document.getElementById("username2").value;

    if (enteredUsername === "wifeyy") {
        document.getElementById("welcomePopup2").style.display = "block";
        document.getElementById("loginPopup2").style.display = "none";
    } else {
        document.getElementById("loginPopup2").style.display = "none";
        document.getElementById("wrongPopup").style.display = "block";
    }
};

document.getElementById("tryButton2").onclick = function() {
    document.getElementById("wrongPopup").style.display = "none";
    document.getElementById("loginPopup2").style.display = "block";
}

// Get the button element
var button = document.getElementById('clickButton');

// Add a click event listener
button.addEventListener('click', function() {
  // Redirect to another page
  window.location.href = 'flower.html';
});
