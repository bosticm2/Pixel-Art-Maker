/** DECLARATION OF GLOBAL VARIABLES */
const submitButton = $( 'form' ).find('input').last();
let clickCount = 0;


/** GRID BUILDER FUNCTION  (The one part I struggled with figuring out was in the 
last line of the loop . I was trying to append the <td> elements to the "tr" rows. 
However, it built a staggered grid. It turns out that I only needed to attach the 
<td> elements to the last row using this tag: "tr:last"). */
const gridBuilder = function() {
	n = $("#input_height").val();
	m = $("#input_width").val();

	for (i=1; i<=n; i++) {
		$('table').append("<tr>")
			for (j=1; j<=m; j++) {
				$("tr:last").append("<td>");
		}
	}
};

/** GRID BUILDER ROUTINE */
$(submitButton).click(function() {
clickCount += 1;

	if (clickCount>0) {
		$('td' && 'tr').detach();
		gridBuilder();
	};
	return false;
});


/** COLOR PAINTER  (Had to put a parent element of "body" before "td "because the 
click-binding only attaches if the element already exists in the HTML code) */
$( "body" ).on('click', 'td', function paint() {

	colorChoice = $("#colorPicker").val();
	
	$( this ).css("background-color", colorChoice);

});