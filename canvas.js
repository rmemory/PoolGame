function Canvas2D() {
	this.canvas = document.getElementById("screen");
	this.ctx = this.canvas.getContext("2d");
}

Canvas2D.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position) {
	this.ctx.drawImage(image, position.x, position.y);
}

const canvas = new Canvas2D();

/* const image = new Image();
image.src = "./assets/sprites/spr_background4.png";

setTimeout(() => {
	canvas.drawImage(image, {x:0, y:0});
}, 1000);*/