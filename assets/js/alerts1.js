localStorage["remember_alerts"] = "0";
if (localStorage.getItem("remember_alerts") == '0') {
    alert("Welcome to C0d1ngR4bb1t!");
    alert("Here you will find my projects, some javascript bookmarklets...\nHope you like them!");
    alert("Remember to star my projects if you like them :P");
    localStorage["remember_alerts"] = '1';
}; else if (localStorage.getItem("remember_alerts") == '1') {
    return;
}; else {
    console.log("Invalid LocalStorage Value. Resetting...");
    localStorage["remember_alerts"] = '0';
};
