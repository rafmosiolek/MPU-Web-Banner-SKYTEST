// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background, skyLogo, products, gradient1, blueCopy1, gradient2, greyCopy, gradientStamp, stampShadow, ctaButton, ctaButtonSheen, gradient3, blueCopy3, gradientCopy, greyCopy3, clearFrame1, clearFrame2;
	
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		// ids and URIs of files being displayed through a whole animation
		{id: "background", src: "images/background.png"},
		{id: "sky-logo", src: "images/sky-logo.png"},
		// ids and URIs of files for frame one
		{id: "products", src: "images/frame1/products.png"},
		{id: "gradient1", src: "images/frame1/gradient-text.png"},
		{id: "blue-copy1", src: "images/frame1/blue-copy.png"},
		// ids and URIs of files for frame two
		{id: "gradient2", src: "images/frame2/gradient2-text.png"},
		{id: "grey-copy", src: "images/frame2/grey-copy.png"},
		{id: "gradient-stamp", src: "images/frame2/gradient-stamp.png"},
		{id: "stamp-shadow", src: "images/frame2/stamp-shadow.png"},
		// ids and URIs of files for frame three
		{id: "gradient3", src: "images/frame3/gradient3-text.png"},
		{id: "blue-copy3", src: "images/frame3/blue-copy3.png"},
		{id: "gradient-copy", src: "images/frame3/gradient-copy.png"},
		{id: "grey-copy3", src: "images/frame3/grey-copy3.png"},
		{id: "sprite-sheet", src: "images/frame3/sprite-sheet.png"}
		]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 1000);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.

		// provide the loader result for the item with id == "products" as a bitmap stored in var products;
		products = new createjs.Bitmap(loader.getResult("products"));
		// set the products bitmap alpha value to zero.
		products.alpha = 0;
		// add products to the display list (canvas#stage).
		stage.addChild(products);
		// animate the products bitmap alpha value to 1 over the duration of 1000 milliseconds (1 second).
		createjs.Tween.get(products).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "sky-logo" as a bitmap stored in var skyLogo;
		skyLogo = new createjs.Bitmap(loader.getResult("sky-logo"));
		// set the skyLogo bitmap alpha value to zero.
		skyLogo.alpha = 0;
		// add skyLogo to the display list.
		stage.addChild(skyLogo);
		// animate the skyLogo bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(skyLogo).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "gradient1" as a bitmap stored in var gradient1;
		gradient1 = new createjs.Bitmap(loader.getResult("gradient1"));
		// set the gradient1 bitmap alpha value to zero.
		gradient1.alpha = 0;
		// add the gradient1 to the display list.
		stage.addChild(gradient1);
		// wait for 1000 milliseconds and animate the gradient1 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient1).wait(1000).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "blue-copy1" as a bitmap stored in var blueCopy1;
		blueCopy1 = new createjs.Bitmap(loader.getResult("blue-copy1"));
		// set the blueCopy1 bitmap alpha value to zero.
		blueCopy1.alpha = 0;
		// add the blueCopy1 to the display list.
		stage.addChild(blueCopy1);
		// wait for 2000 milliseconds and animate the blueCopy1 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(blueCopy1).wait(2000).to({alpha: 1}, 1000);


		// create createjs container to store all elements that are supposed to fade out after frame1, stored in var clearFrame1;
		clearFrame1 = new createjs.Container();
		// add container to the display list.
		stage.addChild(clearFrame1);
		// add var products, gradient1, blueCopy1 to the container.
		clearFrame1.addChild(products, gradient1, blueCopy1);
 		// wait for 3000 milliseconds and animate the container alpha value to 0 over the duration of 1000 milliseconds.
 		createjs.Tween.get(clearFrame1).wait(4000).to({alpha: 0}, 1000);

		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 5000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.

		// provide the loader result for the item with id == "gradient2" as a bitmap stored in var gradient2;
		gradient2 = new createjs.Bitmap(loader.getResult("gradient2"));
		// set the gradient2 bitmap alpha value to 0.
		gradient2.alpha = 0;
		// add the gradient2 to the display list.
		stage.addChild(gradient2);
		// animate the gradient2 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient2).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "grey-copy" as a bitmap stored in var greyCopy;
		greyCopy = new createjs.Bitmap(loader.getResult("grey-copy"));
		// set the greyCopy bitmap alpha value to 0.
		greyCopy.alpha = 0;
		// add the greyCopy to the display list.
		stage.addChild(greyCopy);
		// wait for 700 milliseconds and animate the greyCopy alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(greyCopy).wait(700).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "gradient-stamp" as a bitmap stored in var gradientStamp;
		gradientStamp = new createjs.Bitmap(loader.getResult("gradient-stamp"));
		// set the gradientStamp bitmap y value to -250.
		gradientStamp.y = -250;
		// add the gradientStamp to the display list.
		stage.addChild(gradientStamp);
		// wait for 700 milliseconds and animate the gradientStamp y value to 0 over the duration of 1000 milliseconds with Ease.bounceOut effect.
		createjs.Tween.get(gradientStamp).wait(700).to({y: 0}, 1000, createjs.Ease.bounceOut);


		// provide the loader result for the item with id == "stamp-shadow" as a bitmap stored in var stampShadow;
		stampShadow = new createjs.Bitmap(loader.getResult("stamp-shadow"));
		// set the stampShadow bitmap y value to -10.
		stampShadow.y = -10;
		// set the stampShadow bitmap x value to -100.
		stampShadow.x = -100;
		// set the stampShadow bitmap scaleX value to 1.8.
		stampShadow.scaleX = 1.8;
		// set the stampShadow bitmap alpha value to 0.2.
		stampShadow.alpha = 0.2;
		// add the stampShadow to the display list.
		stage.addChild(stampShadow);
		// wait for 700 milliseconds and animate the stampShadow x value to 0, y value to 0, scaleX value to 1 and alpha value to 1 over the duration of 1000 milliseconds with Ease.bounceOut effect.
		createjs.Tween.get(stampShadow).wait(700).to({x: 0, y: 0, scaleX: 1, alpha: 1}, 1000, createjs.Ease.bounceOut);


		// create createjs container to store all elements that are supposed to fade out after frame2, stored in var clearFrame2;
		clearFrame2 = new createjs.Container();
		// add container to the display list.
		stage.addChild(clearFrame2);
		// add var gradient2, greyCopy, gradientStamp and stampShadow to the container.
		clearFrame2.addChild(gradient2, greyCopy, gradientStamp, stampShadow);
		// wait for 3000 milliseconds and animate the container alpha value to 0 over the duration of 1000 milliseconds.
		createjs.Tween.get(clearFrame2).wait(4000).to({alpha: 0}, 1000);

		
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 5000);

	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.

		// create spritesheet object for the animated sheen effect stored as var ctaButton;
		ctaButton = new createjs.SpriteSheet({
			// provide the loader result for the item with id == "sprite-sheet".
			images: [loader.getResult("sprite-sheet")],
			// define the invidual frames of the spritesheet.
			frames: {width: 300, height: 250, count: 15},
			// define the sequences to play as named animations.
			animations: {
				// start initial frame with no animation.
				start: 0,
				// set the frames for sheen animation, set loop to false.
				sheen: [1, 14, false]
			}
		});


		// create a Sprite Class stored as var ctaButtonSheen, play the initial frame.
		ctaButtonSheen = new createjs.Sprite(ctaButton, "start");
		// add ctaButtonSheen to the display list.
		stage.addChild(ctaButtonSheen);
		// wait for 2500 milliseconds and call the sheenStart function that plays the sheen animation.
		createjs.Tween.get(ctaButton).wait(3500).call(sheenStart);

		// function sets pause to false and plays the sheen animation.
		function sheenStart() {
			ctaButtonSheen.gotoAndPlay("sheen");
		}


		// provide the loader result for the item with id == "gradient3" as a bitmap stored in var gradient3;
		gradient3 = new createjs.Bitmap(loader.getResult("gradient3"));
		// set the gradient3 bitmap alpha value to zero.
		gradient3.alpha = 0;
		// add gradient3 to the display list.
		stage.addChild(gradient3);
		// wait for 700 milliseconds and animate the gradient3 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient3).wait(500).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "blue-copy3" as a bitmap stored in var blueCopy3;
		blueCopy3 = new createjs.Bitmap(loader.getResult("blue-copy3"));
		// set the blueCopy3 bitmap alpha value to zero.
		blueCopy3.alpha = 0;
		// add blueCopy3 to the display list.
		stage.addChild(blueCopy3);
		// wait for 1200 milliseconds and animate the blueCopy3 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(blueCopy3).wait(1500).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "gradient-copy" as a bitmap stored in var gradientCopy;
		gradientCopy = new createjs.Bitmap(loader.getResult("gradient-copy"));
		// set the gradientCopy bitmap alpha value to zero.
		gradientCopy.alpha = 0;
		// add gradientCopy to the display list.
		stage.addChild(gradientCopy);
		// wait for 1800 milliseconds and animate the gradientCopy bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(gradientCopy).wait(2000).to({alpha: 1}, 1000);


		// provide the loader result for the item with id == "grey-copy3" as a bitmap stored in var greyCopy3;
		greyCopy3 = new createjs.Bitmap(loader.getResult("grey-copy3"));
		// set the greyCopy3 bitmap alpha value to zero.
		greyCopy3.alpha = 0;
		// add greyCopy3 to the display list.
		stage.addChild(greyCopy3);
		// wait for 2000 milliseconds and animate the greyCopy3 bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get(greyCopy3).wait(2500).to({alpha: 1}, 1000);


		// after a timeout and the animations have completed, stop animating the banner.
		setTimeout(function(){
			console.log("stop animating the banner");
			createjs.Ticker.removeEventListener("tick", handleTick);
		}, 5000);
	}
};