// Constants and globally scoped variables should have good names.
// Comments should be added to each line except where the purpose is obvious.

//........... 1.2 Const
// if (navigator.clipboard.readText() == "Copy That") {this.alert("MSE");}

//........... 3.1 Theme
// Function for changing the theme between drk (default) and lght. Temporarily set onclick to corner div.
document.getElementById("divTheme").addEventListener("click", fxThemeChange); // When theme button is clicked.
function fxThemeChange() {
  let elements = document.getElementsByClassName("drk-thm"); // Find all the theme elements.
  Array.prototype.forEach.call(elements, function (element) {
    // Loop through the theme elements with forEach.
    element.classList.toggle("lght-thm"); // Change theme elements to light or dark. // Not sure how this gets back to dark theme but it does.
  });
  let thmText = document.getElementById("divTheme").innerHTML;
  if (thmText == "D") {
    document.getElementById("divTheme").innerHTML = "L";
  } else {
    document.getElementById("divTheme").innerHTML = "D";
  }
}

//......... 8. Test Code

// Fullscreen button
window.addEventListener("click", function (event) {
  let workingID = event.target.id;
  let neededID = "divFullscreen";
  if (workingID == neededID) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key == "Home") {
    window.location.href = "http://localhost:3000/settings.html";
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("bridgePendingID")) {
    var getInput = "bridgePendingID";
    localStorage.setItem("storageName", getInput);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("bridgeInProgressID")) {
    var getInput = "bridgeInProgressID";
    localStorage.setItem("storageName", getInput);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("bridgeSubmittedID")) {
    var getInput = "bridgeSubmittedID";
    localStorage.setItem("storageName", getInput);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("totalPendingID")) {
    var getInput = "totalPendingID";
    localStorage.setItem("storageName", getInput);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("totalInProgressID")) {
    var getInput = "totalInProgressID";
    localStorage.setItem("storageName", getInput);
  }
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("totalSubmittedID")) {
    var getInput = "totalSubmittedID";
    localStorage.setItem("storageName", getInput);
  }
});
