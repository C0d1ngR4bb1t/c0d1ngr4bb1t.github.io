// testing purposes:
// window.localStorage.setItem('remember_alerts', '0');
if (window.localStorage.getItem("remember_alerts") == '0') {
    alert("Welcome to C0d1ngR4bb1t!");
    alert("Here you will find my projects, some javascript bookmarklets...\nHope you like them!");
    alert("Remember to star my projects if you like them :P");
    window.localStorage.setItem("remember_alerts", "1");
} else {
    console.log("Not showing up alerts.");
}
