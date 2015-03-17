function amIHome() {
	$.get("http://60.241.171.39/index.cgi", function(data, status){
		if ( data == "\nhome\n" ) {
			document.getElementById("home_check").innerHTML = "yes, I am at home now.";
		}
		else {
			document.getElementById("home_check").innerHTML = "no, I am not at home now.";
		}

    });

}
