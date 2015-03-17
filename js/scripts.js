function amIHome() {
	var home;
   $.get("http://60.241.171.39", function( home ) {
    // my_var contains whatever that request returned
}, 'html');  // or 'text', 'xml', 'more'
   alert(home);
 }
