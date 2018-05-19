const sprites = {};
let assetsStillLoading = 0;

const assetsLoadingLoop = (callback) => {
	if (assetsStillLoading) {
		/* The general purpose of requestAnimationFrame is to inform the browser 
		that you wish to perform an animation, or more generally perform an 
		action which could be an animation or whatever. In any case, you define 
		the action (animation or otherwise) in the callback). The browser will
		call the callback before the browser performs the next repaint.

		The number of callbacks is usually 60 times per second, but will 
		generally match the display refresh rate in most web browsers as per 
		W3C recommendation. 
		
		In this case, we are just recursively calling assetsLoadingLoop 
		with the same callback to waste time until the assets are loaded. */
		requestAnimationFrame(assetsLoadingLoop);
	} else {
		/* everything is loaded, call the callback */
		assetsLoadingLoop.callback();
	}
};

function loadAssets(callback) {
	function loadSprite(filename) {
		assetsStillLoading++;

		const spriteImage = new Image();

		spriteImage.src = "./assets/sprites/" + filename;
		console.log("loading " + spriteImage.src);
		
		/* This event handler will be called on the image element when the 
		   image has finished loading. */
		spriteImage.onload = function() {
			assetsStillLoading--;
		}
		return spriteImage;
	}

	sprites.background = loadSprite("spr_background4.png");
	sprites.stick = loadSprite("spr_stick.png");

	assetsLoadingLoop.callback = callback;
	assetsLoadingLoop();
}