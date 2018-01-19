A MPU (300px by 250px) web banner. The duration of the banner is limited to 15 seconds.

## Demo

* The demo is available at https://rafmosiolek.github.io/MPU-Web-Banner-SKYTEST/

## Built With

* HTML5/CSS3
* Vanilla JavaScript and its libraries:
    * [CreateJS](http://createjs.com/) - A suite of modular libraries and tools which work together or independently to enable rich interactive content on open web technologies via HTML5.
    * [EaselJS](http://createjs.com/easeljs) - A JavaScript library that makes working with the HTML5 Canvas element easy. Useful for creating games, generative art, and other highly graphical experiences.
    * [PreloadJS](http://createjs.com/preloadjs) - A JavaScript library that lets you manage and co-ordinate the loading of assets and data.
    * [TweenJS](http://createjs.com/tweenjs) - A simple but powerful JavaScript library for tweening and animating HTML5 and JavaScript properties. Works stand-alone or integrated with EaselJS.

### Software

* Adobe Photoshop CS6 - to export all required images from provided .psd file and to create a sprite sheet file for the sheen animation
* SublimeText 3 - my go-to text editor.

## Possible ways of improvement

* I could definietely add some unit testing for canvas elements and images. Since humblesoftwaredevelopment.com introduced canvas/svg tests for Jasmine framework I could possibly add tests like below:



```
// Matchers
beforeEach(function () {
this.addMatchers(imagediff.jasmine);
});

// Test
it('should convert be the same image', function () {

var
background = new Image(),
backgroundMatcher = new Image();
background.src = 'images/background.png';
backgroundMatcher.src = 'images/background.png';

waitsFor(function () {
return background.complete & backgroundMatcher.complete;
}, 'image not loaded.', 2000);

runs(function () {
expect(background).toImageDiffEqual(backgroundMatcher); // imagediff expects Image, Canvas, CanvasRenderingContext2D or ImageData
});
});

```
