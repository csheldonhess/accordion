
// hide the divs in class "blocks"
// hide the menu that doesn't show up if JavaScript's off, too
$('.blocks, .anchors').hide();



// add arrows to the headings - ** SUB IN YOUR OWN FILE STRUCTURE (and other arrows, if you want) **
$('a').children('h2').append(' <img src="images/arrow_closed.gif" class="arrows" name="click to show/hide text" />');
var open_filename = "arrow_open.gif";
var closed_filename = "arrow_closed.gif";

// if going right to a sub-heading via anchor tag (http://la.la.com/la.html#anchor), open that section
// **** IMPORTANT: in the HTML file, make sure you match names 
// between every <a name=""> and its following <div class="blocks" id=""> ****
var hash = window.location.hash; // gets the anchor tag from the URL
$(hash).show(); // opens the div with the id of the anchor tag
var theimg = $(hash).prev('a.headings').children('h2').children('img'); // gets the img BEFORE the div
theimg.hide(); // this works

// this doesn't:
var arrow_down = theimg.html().replace(closed_filename, open_filename); 
theimg.html(arrow_down); 

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