var shapeManager = new ShapeManager();

var selectShapeSpinner = document.getElementById("type_shape");
selectShapeSpinner.onchange = function () {
	shapeManager.choiseShape(selectShapeSpinner.selectedIndex);
};

var drawShapeButton = document.getElementById("draw_shape_button");
drawShapeButton.onclick = function () {
	shapeManager.draw();
};
