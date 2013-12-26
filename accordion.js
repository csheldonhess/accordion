
// hide the divs in class "blocks"
$(".blocks").hide();

// add arrows to the headings - ** SUB IN YOUR OWN FILE STRUCTURE (and other arrows, if you want) **
$('a').children('h2').append(' <img src="images/arrow_closed.gif" class="arrows" name="click to show/hide text" />');
var open_filename = "arrow_open.gif";
var closed_filename = "arrow_closed.gif";

// toggle the visibility of the text when the header's clicked; also flip the arrow
$(".headings").click(function() { 
    var theblock =  $(this).next(".blocks");
    theblock.toggle(0);

    // something I tried, so I could use toggle("fast") instead; didn't work; continued below
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

// figure out the URL's target anchor (if any), and make that div visible



// trying to deal with the delay in toggle("fast")
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