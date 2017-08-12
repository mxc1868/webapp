var keySeq = [38,38,40,40,37,39,37,39,66,65];
var counter = 0;
document.addEventListener("keyup", function(e) {
	console.log(e.keyCode);
	console.log(counter);
	var div = document.querySelectorAll("div figure");
	if (e.keyCode == keySeq[counter]) {
		counter++;
	} else {
		counter = 0;
	}
	if (counter == keySeq.length) {
		[].forEach.call(div, function(element) {
			element.classList.add("appear");
		});
	}
})