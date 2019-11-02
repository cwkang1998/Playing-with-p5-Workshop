# Playing with p5.js

## Introduction to the Web

The world wide web that we know consists of many web pages, which is built from 3 main technologies, which is HTML, CSS and Javascript respectively.

- HTML describes the structure and content of the web page.
- CSS describes the presentation of a document (web page), determine how it would look like.
- Javascript is a programming language that enables interactive web pages and dynamic content generation.

## Requirements and Dependencies

- p5.js
- Glitch

Glitch is a platform for creating demo and prototype of Javascript application. It will be the main tool used by us for this workshop.

To set it up, first go to the url provided on [Glitch](https://glitch.com/).

You should see a project page with preexisting code like this:

![Glitch starting](./doc_media/glitch_screen1.png)

Click on the `Remix to Edit` button on the upper right.

![Glitch Remix to Edit](./doc_media/glitch_screen2.png)

After clicking the button, Glitch would load for a brief moment before showing this page; Now you can edit the code and play around with it! You can always refer to the original URL for live code update from the workshop conductor as well!

![Glitch Page with your code](./doc_media/glitch_screen3.png)

## Short Explaination on Existing Code

Some code had already been written for you on Glitch to help you start easily. Let's find out what they do!

There are two files given in Glitch, which are `index.html` and `script.js` respectively.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <script src="./script.js"></script>
    <style>
        body{
            background-color: grey;
        }
    </style>
    <title>Document</title>
</head>
<body>
</body>
</html>
```

As said before, html represents the structure and content of the page.

This line tells the browser that this file is a HTML file.

```html
<!DOCTYPE html>
```

The `<head>` tag contains the metadata of the HTML document. It sets up things such as character sets , viewport, compaitbility to edge and most importantly import external code resources such as CSS and Javascript.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <script src="./script.js"></script>
    <style>
        body{
            background-color: grey;
        }
    </style>
    <title>Document</title>
</head>
```

The line:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
```

imports the p5.js library from the internet hosted by a content delivery network from the developers of p5.js.

By the same syntax, this line:

```html
<script src="./script.js"></script>
```

imports the script you had written to be ran on the document.

We then have the body tag, which signifies the start of the content of the document.

It is here where all the information would be display, and also where p5.js would place the canvas and draw at.

```html
<body>
```

### script.js

```js

// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
}

```

p5.js provides 2 function to allow users to quickly do some visual programming.

The `setup()` function holds all the setup code, and also things that you want to execute once only.

The `draw()` function is a loop, meaning that it would be ran over and over again as long as the application is active, so you put all your drawing code, interactive code, and animation code here.

## Introduction to p5.js

We've been talking about p5.js, but what exactly is it?

According to their official website,

> p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!

Here, a Javascript library refers to a collection of code performing some function that other people had written. We use them because it saves time needed to reimplement what had already been done (code reuse).

p5.js is a realy good starting point to learn coding as it allows us to visualize what we are doing.

## Basic Drawing in p5.js

Let's start with learning how to draw simple shapes in p5.js.

First, go to `script.js`.

You should see code like this in there:

```js
// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
}
```

Here, you can see `createCanvas(640, 600)` which is a function that creates a drawing board in the body of a html document for p5.js.

You also see `background(255)`, which sets the background to white (Using RGB values).

p5.js uses a grid system for its canvas, so you have to provide coordinates to things that you draw. It looks something like this:

![Grid and shapes](doc_media/grid.png)

### Ellipse

Let's start by drawing a circle, or otherwise known as a ellipse. To draw an ellipse. we use a function called `ellipse(x,y,width,height)`.

`x`, `y`, `width`, `height` here are the **parameters** that tells the `ellipse()` function what are the coordinates (`x`, `y`) and size (`width`, `height`) of the circle I want to draw.

You use it like so :

```js
// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
    ellipse(100, 200, 80, 80);
}
```

The result:
![a circle](./doc_media/ellipse1.png)

You can also use variables to store the **parameters** if they can be calculated or acquired later.

```js
let x = 50;
let y = 60;

// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
    ellipse(x, y, 80, 80);
}
```

The result:
![a circle](./doc_media/ellipse2.png)

### Rect

Similarly, you can draw a rectangle via using the `rect(x, y, width, height)` function.

```js
// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
    ellipse(100, 200, 80, 80);
}
```

The result:
![a rectangle](./doc_media/rect1.png)

### Fill

We had been drawing shapes, but just in case you haven't realised, the shapes that we drew does not have any colour, how do we change that?

Simply use another function of course!

`fill(red, green, blue)` is a function that allows you to set the colour of the insides of the next thing you draw. It takes 3 parameters: `red`, `green` and `blue`, to allow you to change colours.

To demonstrate, let me change the colour of the rectangle we had to violet. According to my google search, violet had the value of 238 red, 130 green and 238 blue. Let's pluck that value in it and see what happens.

```js
let x = 50;
let y = 60;

// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
    fill(238,130,238);
    rect(x, y, 80, 80);
}
```

Result:

![violet fill](./doc_media/violet_rect.png)

**Tada !**

Now, you might be thinking that drawing with code is good and all, but is it all it can do? This is where *Events* comes in.

## Events in p5.js

p5.js provided us with some functions to make our drawing **react** to what we do. Let's take a look:

### keyPressed

But what if I want to use my keyboard? No worries, we shall now discover how!

p5.js provide us with a `keyPressed()` function that we can implement. Here is how:

```js
```

Easy right? Now let's do something when the key is pressed.


```js

function keyPressed(){
  rect(100, 200, 100, 100);
}
```

Go back to your application and try pressing any key. What happens?

### key & keyCode

When any key is pressed, the `keyPressed` function will be called. That's why we rely `key` and `keyCode` to keep track of the key pressed.

The `key` and `keyCode` variables holds value to the current keyboard key that you are clicking on. `key` holds the literal value (Meaning that letter C would cause it to hold 'C' as a value), but `keyCode` holds the code for the key (For example, letter C has key code 67).

Both can be used, but key code are usually used to detect instances of special key like the Return key or the Space bar.

Let's add a erase feature to our current app.

```js
function setup() {
  createCanvas(640, 600);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
function keyPressed(){
  if(key == 'c' || key == 'C'){
    background(255);
  }
}
```

You may notice that I used 2 special symbols, `==` and `||`. They are actually called logical operators, and they allow us to compare conditions specified in the conditional statement (`if` and `else`). `a == b` checks if the value of `a` is equals to `b` and only resolve to true if it is equal. `a || b` checks if the value of `a` or `b` is true, and resolves to true if either `a` or `b` is true, false otherwise. There are many more logical like the and operator (`&&`), which can allow us to do more comparisons! Go check them out!

Now, when the 'c' key or the 'C' key is pressed, I would set the background to 255, which is white, which will also reset everything on it! Success!

## Making a Painting Game

So, we've learnt how to draw and create interaction with p5.js. Let's utilize this knowledge to make a simple paint application!

Let's start everything from a clean slate.

```js
function setup() {
  createCanvas(640, 600);
  background(255);
}

function draw(){
  
}
```

### Starting simple

Let's start with the draw function. I will be using `rect` as the shape of the brush, but you are free to use `ellipse` too!

Recall that we made a simple program to draw things on our cursor. Let's reproduce that!

## References

[p5.js docs](https://p5js.org/reference/)

[The Coding Train](https://www.youtube.com/user/shiffman)
