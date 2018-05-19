function Game() {

}

Game.prototype.init = () => {
	PoolGame.gameWorld = new GameWorld();
}

Game.prototype.start = function() {
	console.log("starting game ...");
	PoolGame.init();
	PoolGame.mainLoop();
}

Game.prototype.mainLoop = function() {
	canvas.clear();
	PoolGame.gameWorld.update();
	PoolGame.gameWorld.draw();

	requestAnimationFrame(PoolGame.mainLoop);
}

const PoolGame = new Game();