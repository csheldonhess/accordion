$(".blocks").hide();
$('a').children('h2').append(' <img src="assets/images/buttons/arrow_closed.gif" class="arrows" name="click to show/hide text" />');
var open_filename = "arrow_open.gif";
var closed_filename = "arrow_closed.gif";

$(".headings").click(function() { 
    var theblock =  $(this).next(".blocks");

    theblock.toggle(0);

    //var timeoutID = window.setTimeout(toggle_arrows($(this), theblock), 600);

    if (theblock.is(":hidden")) {
    	var closed_html = $(this).html().replace(open_filename, closed_filename);
        $(this).html(closed_html);
    }
    else {
        var open_html = $(this).html().replace(closed_filename, open_filename);
        $(this).html(open_html);
    }
    
});



/*function toggle_arrows(that, thatblock) {
	if (thatblock.is(":hidden")) {
    	var closed_html = that.html().replace(open_filename, closed_filename);
        that.html(closed_html);
    }
    else {
        var open_html = that.html().replace(closed_filename, open_filename);
        that.html(open_html);
    }
}*/