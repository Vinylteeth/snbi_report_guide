// Constants and globally scoped variables should have good names.
// Comments should be added to each line except where the purpose is obvious.

//........... 1.2 Const
// if (navigator.clipboard.readText() == "Copy That") {this.alert("MSE");}

//......... 8. Test Code

function openAsset(evt, assetName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(assetName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openBridgeComponent(evt, componentName) {
  // Declare all variables
  var i, tabcontentNested, tablinksNested;

  // Get all elements with class="tabcontentNested" and hide them
  tabcontentNested = document.getElementsByClassName("tabcontentNested");
  for (i = 0; i < tabcontentNested.length; i++) {
    tabcontentNested[i].style.display = "none";
  }

  // Get all elements with class="tablinksNested" and remove the class "active"
  tablinksNested = document.getElementsByClassName("tablinksNested");
  for (i = 0; i < tablinksNested.length; i++) {
    tablinksNested[i].className = tablinksNested[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}
