function Game() {

}

Game.prototype.init = function () {
	this.gameWorld = new GameWorld();
}

Game.prototype.start = function () {
	console.log("starting game ...");
	this.init();
	this.mainLoop();
}

Game.prototype.mainLoop = function () {
	canvas.clear();
	PoolGame.gameWorld.update();
	PoolGame.gameWorld.draw();

	requestAnimationFrame(PoolGame.mainLoop);
}

const PoolGame = new Game();