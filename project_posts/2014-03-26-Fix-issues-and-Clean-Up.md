## Ups! where is my heart?

March 26, two days for the delivery and I'm almost done, the plan is review the code and document the process, I've posted some pictures and phrases but without details.

Meanwhile I start to prepare everything I see that something odd happens with the needle animation.

The issues is that when you change to another tab and come back to the logo page the cuore needle disappear or stop working. 

Panic!

Ok, calm down, remember you are now the canvas warrior. 

But after run some tests and change different things, I can't find where is the problem.

The blunt truth is that I was not happy with my code to generate the heart shapes animations, even if it works in the first instance, is a weak implementation compared with the rewriten wirelib.

## Rewrite or die

I remembered the rewrite required on wirelib in order to have two different canvas with wirelib animations in them (you can see the details here: [rewriting wirelib](http://www.bit-101.com/blog/?p=3129 "rewriting wirelib")). 

Not sure if I was having the same problem, but I guessed it was a related issue, and rewrite the library is a benefit itself.

My concern is if I have time enough to rewrite my code in the say way Keith did.

Why don't give it a try?

## Agile Test Driven Development

This time, I go directly with the Agile approach and split my code into two new files:

- shapelib_0.1.js. Contains the functionality to handle the canvas and animations.
- mar18.js. Set up the canvas and invoque the animations.

I make the "index_14.html" now reference the new "mar18.js", refresh, and the heart animations dissapear. 

This is because the "mar18.js" is empty, and the old heart animation code placed in "mar16.js" is now into the "shapelib_0.1.js".

It is time to rewrite and rewire. How to do this quickly and without miss anything?

As I was trying to debug the problem early on my Chrome Browser looks this way:

![Google Chrome / Tools / Developer tools](project_images/Chrome_Developer_Tools.jpg?raw=true "Google Chrome / Tools / Developer tools")

I look to the console error messages increasing fast as a result of the mess I made with the files and code.

Interesting.

Why don't use the errors in the console as an improvised unit testing tool? The console is going to tell what is pending, what is wrong, or what I need to add. Great!

It doesn't take too much to see the flying hearts again, the moment of truth, the heart needle, I add the code, run it, it works... Yeah!!

Well, now looks pretty stable, although being brutally honest, I don't dedicate more time to understand why, I assume that with good practices comes good code.

That's how I ended up adding a new file "shapelib_0.1.js", that allows me to have multiple instances of the library, each initialized with its own canvas. 

That's why also I've added the file "mar18.js" to generate shape animations in the canvas. 

Now the issue is solved!!

## Code Housekeeping

Another good practice.

I add "mar15.js" that is almost the same than "mar14.js", but I prefer to remove the cube animation code even if I like it, because I think is noise adding.

I leave a comment for a future improvement, I think this is clear and easy to do, but not now.

Generally, I remove comment code that is not adding value or is part of tests. 

Since we are using a code repository tool, is not necessary leave commented code unless it have a clear objective.

Close to the finish line!

