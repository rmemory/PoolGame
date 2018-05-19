function Stick() {
	this.position = {x: 0, y: 400};
}

Stick.prototype.update = function() {
	// Testing only
	this.position.x++;
}

Stick.prototype.draw = function() {
	canvas.drawImage(sprites.stick, this.position);
}