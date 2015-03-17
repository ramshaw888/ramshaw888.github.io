function amIHome() {
    var home;
    $.get("http://60.241.171.39", function( home ), "text");
    alert(home);
}
