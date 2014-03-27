
## Wire a heart?

Until now, the challenge was to understand the library already implemented (wirelib_0.3.js), but I recognize that a lot work was done in advance.

The problem now is different, I need to draw a heart and I'm not sure if this can be done with the same library. I decided to understand better the functions that generate the points and the lines. 

I need to refresh my javascript, this is a good place to go:

[Codecademy](http://www.codecademy.com/ "Codecademy")

Not only I can check again some concepts, I also can go to the <labs> and run some tests. And with a better understanding of how the figures are generated, I realize that try to reuse what is done would take me more time than I have, this is an end road.

## Complex canvas shapes

I decided to have look to mozilla documentation looking for some inspiration, because is not possible to draw wire a heart as I pretend. 

Here is where I go:

[Mozilla Canvas Shapes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial/Drawing_shapes "Mozilla Canvas Shapes")

I go back and forward trying to find an example that I can use, I need to draw a heart that I can resize, so the static examples are a good clue but not a viable solution.

## Divide and conquer

I want to show how the hearts fly with every needle stitch from the sewing machine. 

I think I have part of the work done looking at this example, 

[The code behind flying dots](http://www.bit-101.com/blog/?p=3150 "the code behind flying dots")

you can check it running here:

[flying dots](http://www.bit-101.com/jscanvas/mar16.html "flying dots")

where dots fly from a emision point, similar to a volcano. I should replace the dots with hearts and probably tweak a bit the emision of hearts.

I also need to simulate the needle going up and down very quickly as in the real sewing machine.

But if I'm not able to draw a resizable heart I have nothing, so I decided to focus on this first, because looking at the code I think I can replace a 2d dot with a 2d heart, but not hundred per cent sure, a bit risky here, let see what happen.

## A small stroke for a man ...



To draw a cuore was not easy at all, finally I have had to use paper and pencil:

![Quadratic Cuore](project_images/cuore.jpg?raw=true "Quadratic Cuore")

But I manage to get something decent:

![Rafaela Alameda Step 3](project_images/step3.jpg?raw=true "Rafaela Alameda Step 3")

Let see if I can animate a bit this heart...



 
