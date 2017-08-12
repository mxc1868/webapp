$("table").on("click", "tr td",function() {
	var curId = $(this).parent().attr("id");
	var curLine;
	if ($(this).hasClass("lineThrough")) {
		curLine = false;
	} else {
		curLine = true;
	}
	$.post("/todo", {id:curId, line:curLine, method:"UPDATE"});
	$(this).toggleClass("lineThrough");
});
$("table").on("click", "tr td span", function(e) {
	var curId = $(this).parent().parent().attr("id");
	$.post("/todo", {id:curId, method:"DELETE"});
	$(this).parent().fadeOut(500, function() {
		$(this).parent().remove();
	});
	e.stopPropagation();
})
$("input[type=\"text\"]").on("keypress", function(e) {
	if(e.which === 13) {
		var input = $("input[type=\"text\"]").val();
		var num = $("tr").length;
		$.post("/todo", {id:num, thing:input, line:false, method:"CREATE"}).done(function() {
			location.reload();
		});
		
	}
});

