(function alerts1Start() {
  if (localStorage.get("remember_alerts") == 0) {
    alert("Welcome to C0d1ngR4bb1t!");
    alert("Here you will find my projects, some javascript bookmarklets...\nHope you like them!");
    alert("Remember to star my projects if you like them :P");
  };
  else if (localStorage.get("remember_alerts") == 1) {
    return;
  };
  else {
    console.log("Invalid LocalStorage Value. Resetting...");
    localStorage["remember_alerts"] = 0
  };
};();
