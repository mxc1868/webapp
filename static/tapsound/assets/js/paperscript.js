for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		var circle = new Path.Circle(new Point(100*i, 100*j), 10);
		circle.fillColor = "purple";
	}
}
