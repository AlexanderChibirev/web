function Shape(type) {
	this._borderColor= "#000000";
	this._fillColor=  "#000000";
}

Shape.prototype = {

	setBorderColor: function(color) {
		this._borderColor = color;
	},
	
	getBorderColor: function() {
		return this._borderColor;
	},
	
	setFillColor: function(color) {
		this._fillColor = color;
	},
	
	getFillColor: function() {
		return this._fillColor;
	},

};