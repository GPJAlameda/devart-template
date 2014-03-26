I found that when you change to another tab and come back to the logo page the cuore needle disappear or stop working. I've run some tests and change different things without results.

Then I've remembered the rewrite required on wirelib in order to have two different canvas with wirelib animations in them (you can see the details here: http://www.bit-101.com/blog/?p=3129). Not sure I was having the same problem, but I guessed it was a related issue, and rewrite the library is a benefit itself.

That's how I ended up adding a new file "shapelib_0.1.js", that allows you to have multiple instances of the library, each initialized with its own canvas. That's why also I've added the file "mar18.js" to generate shape animations in the canvas.

Finally some housekeeping made me add "mar15.js" that is almost the same than "mar14.js".


 
